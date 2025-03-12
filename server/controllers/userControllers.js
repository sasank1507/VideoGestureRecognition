const users = require("../models/userSchema");
const userotp = require("../models/userOtp");
const nodemailer = require("nodemailer");
//const twilio = require('twilio');


// email config
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "anishsamudrala2705@gmail.com",
        pass: "zaim bbsk ftaz wabw"
    }
})




exports.userregister = async (req, res) => {
    const { fname, email, password, phone } = req.body;
    if (!fname || !email || !password || !phone) {
        res.status(400).json({ error: "Please Enter All Input Data" })
    }

    try {
        const presuer = await users.findOne({ email: email });

        if (presuer) {
            res.status(400).json({ error: "This User Already exist in our Database" })
        } else {
            const userregister = new users({
                fname, email, password, phone
            });

            // here password hasing

            const storeData = await userregister.save();
            res.status(200).json(storeData);
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }

};

// user send otp
exports.userOtpSend = async (req, res) => {
    const { email, password } = req.body;
    const user = await users.findOne({ email })
    //console.log(user.phone)
    if (!email) {
        res.status(400).json({ error: "Please Enter Your Email" })
    }
    if (!password) {
        res.status(400).json({ error: "Please Enter Your Password" })
    }
    else {
        const cpass = await users.findOne({ email: email });
        if (!cpass) {
            res.status(400).json({ error: "Invalid password" })
        }
    }
    try {
        const presuer = await users.findOne({ email: email });

        if (presuer) {
            const OTP = Math.floor(100000 + Math.random() * 900000);

            const existEmail = await userotp.findOne({ email: email });


            if (existEmail) {
                const updateData = await userotp.findByIdAndUpdate({ _id: existEmail._id }, {
                    otp: OTP
                }, { new: true }
                );
                await updateData.save();

                const mailOptions = {
                    from: "anishsamudrala2705@gmail.com",
                    to: email,
                    subject: "Sending Email For Otp Validation",
                    text: `OTP:- ${OTP}`
                }
                tarnsporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log("error", error);
                        res.status(400).json({ error: "Email not send" })
                    } else {
                        console.log("Email sent", info.response);
                        res.status(200).json({ message: "Email sent Successfully" })
                    }
                })
                


            } else {

                const saveOtpData = new userotp({
                    email: email.trim().toLowerCase(), 
                     otp: OTP
                });

                await saveOtpData.save();
                const mailOptions = {
                    from: "anishsamudrala2705@gmail.com",
                    to: email,
                    subject: "Sending Email For Otp Validation",
                    text: `OTP:- ${OTP}`
                }

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log("error", error);
                        res.status(400).json({ error: "Email not send" })
                    } else {
                        console.log("Email sent", info.response);
                        res.status(200).json({ message: "Email sent Successfully" })
                    }
                })
            }
        } else {
            res.status(400).json({ error: "This User Not Exist In our Database" })
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }
};


exports.userLogin = async (req, res) => {
    try {
        console.log("Raw request body:", req.body);
        
        const email = req.body.email?.email; 
        const otp = req.body.otp;

        if (!email || !otp) {
            return res.status(400).json({ error: "Please Enter Your OTP and Email" });
        }

        const normalizedEmail = email.trim().toLowerCase();

        console.log(`User trying to login with: ${normalizedEmail} and OTP: ${otp}`);

        const storedOtps = await userotp.find({});
        console.log("Stored OTP records in database:", storedOtps);

        const otpVerification = await userotp.findOne({ email: normalizedEmail });

        console.log("OTP verification query result:", otpVerification);

        if (!otpVerification) {
            return res.status(400).json({ error: "OTP not found for this email" });
        }

        if (otpVerification.otp === otp) {
            const preuser = await users.findOne({ email: normalizedEmail });

            if (!preuser) {
                return res.status(400).json({ error: "User not found" });
            }

            const token = await preuser.generateAuthtoken();

            return res.status(200).json({ message: "User Login Successfully", userToken: token });
        } else {
            return res.status(400).json({ error: "Invalid OTP" });
        }

    } catch (error) {
        console.error("Error in userLogin:", error);
        return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
};
