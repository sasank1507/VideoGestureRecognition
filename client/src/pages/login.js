import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { sentOtpFunction } from "../services/Apis";
import Spinner from 'react-bootstrap/Spinner';
import "../styles/mix.css"

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [spiner,setSpiner] = useState(false);

    const navigate = useNavigate();



    // sendotp
    // const sendOtp = async (e) => {
    //     e.preventDefault();
    
    //     if (email === "") {
    //         toast.error("Enter Your Email!");
    //         return;
    //     } else if (!email.includes("@")) {
    //         toast.error("Enter a Valid Email!");
    //         return;
    //     }
    
    //     if (password === "") {
    //         toast.error("Enter Your Password!");
    //         return;
    //     } else if (password.length < 6) {
    //         toast.error("Password must be at least 6 characters!");
    //         return;
    //     }
    
    //     setSpiner(true);
    
    //     try {
    //         const data = { email, password };
    //         const response = await sentOtpFunction(data);
    //         console.log("API Response:", response);  // Debugging
    
    //         if (response.status === 200) {
    //             setSpiner(false);
    //             console.log("Navigating to OTP Page...");
    //             navigate("/user/otp", { state: { email, password } });
    //         } else {
    //             setSpiner(false);
    //             toast.error(response.response?.data?.error || "Something went wrong!");
    //         }
    //     } catch (error) {
    //         setSpiner(false);
    //         console.error("API Error:", error);
    //         if (error.response) {
    //             console.log("Backend Error:", error.response.data);
    //             toast.error(error.response.data.message || "Something went wrong!");
    //         } else {
    //             toast.error("Server error, try again later!");
    //         }
    //     }
    // };
    const sendOtp = async (e) => {
        e.preventDefault();
    
        if (!email) {
            toast.error("Enter Your Email!");
            return;
        } else if (!email.includes("@")) {
            toast.error("Enter a Valid Email!");
            return;
        }
    
        if (!password) {
            toast.error("Enter Your Password!");
            return;
        } else if (password.length < 6) {
            toast.error("Password must be at least 6 characters!");
            return;
        }
    
        setSpiner(true);
    
        try {
            const data = { email, password };
            console.log("Sending OTP Request:", data);
    
            const response = await sentOtpFunction(data);
            console.log("API Response:", response);  // Check response in console
    
            if (response && response.data?.message === "Email sent Successfully") {
                setSpiner(false);
                console.log("✅ Navigating to OTP Page...");
                navigate("/user/otp", { state: { email } });
            } else {
                setSpiner(false);
                toast.error(response.response?.data?.error || "Something went wrong!");
            }
        } catch (error) {
            setSpiner(false);
            console.error("❌ API Error:", error);
    
            if (error.response) {
                console.log("Backend Error:", error.response.data);
                toast.error(error.response.data.error || "Invalid credentials!");
            } else {
                toast.error("Server error, please try again later!");
            }
        }
    };
    
    

    return (
        <>
            <section>
                <div className="form_data">

                    <div className="form_heading">
                        <h1>VIDEO GESTURE RECOGNITION</h1>
                        <h2>Welcome Back, Log In</h2>
                    </div>
                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="email" id="" onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
                        </div>
                        <button className='btn' onClick={sendOtp}>Login
                        {
                            spiner ? <span><Spinner animation="border" /></span>:""
                        }
                        </button>
                        <p>Don't have an account? <NavLink to="/register">Sign up</NavLink> </p>
                    </form>
                </div>
                <ToastContainer />
            </section>
        </>
    )
}

export default Login