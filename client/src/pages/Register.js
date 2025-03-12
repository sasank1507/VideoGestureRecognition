import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { registerfunction } from '../services/Apis';
import { useNavigate } from 'react-router-dom';
import '../styles/mix.css';

const Register = () => {
  const [passhow, setPassShow] = useState(false);

  const [inputdata, setInputdata] = useState({
    fname: '',
    email: '',
    password: '',
    phone: ''
  });

  const navigate = useNavigate();

  // setinputvalue
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputdata({ ...inputdata, [name]: value });
  };

  // register data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, email, password, phone } = inputdata;

    if (!fname.trim()) {
      toast.error('Enter Your Name');
    } else if (!email.trim()) {
      toast.error('Enter Your Email');
    } else if (!email.includes('@')) {
      toast.error('Enter Valid Email');
    } else if (!phone.trim()) {
      toast.error('Enter Your Mobile Number');
    } else if (password.length < 6) {
      toast.error('Password length must be at least 6 characters');
    } else {
      try {
        const response = await registerfunction(inputdata);
        if (response.status === 200) {
          setInputdata({ fname: '', email: '', password: '', phone: '' });
          toast.success('Registration successful!');
          navigate('/');
        } else {
          toast.error(response?.data?.error || 'Registration failed');
        }
      } catch (error) {
        toast.error(error.response?.data?.error || 'Server error, try again');
      }
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Video Gesture Recognition</h1>
          </div>
          <h1>Registration</h1>
          <form>
            <div className="form_input">
              <label htmlFor="fname">Username</label>
              <input
                type="text"
                name="fname"
                value={inputdata.fname}
                onChange={handleChange}
                placeholder="Enter Your UserName"
              />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={inputdata.email}
                onChange={handleChange}
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="form_input">
              <label htmlFor="phone">Mobile Number</label>
              <input
                type="tel"
                name="phone"
                value={inputdata.phone}
                onChange={handleChange}
                placeholder="Enter Your Mobile Number"
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passhow ? 'password' : 'text'}
                  name="password"
                  value={inputdata.password}
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                />
                <div className="showpass" onClick={() => setPassShow(!passhow)}>
                  {!passhow ? 'Show' : 'Hide'}
                </div>
              </div>
            </div>
            <button className="btn" onClick={handleSubmit}>
              Sign Up
            </button>
            <p>Already have an account? <a href="/login">Login</a></p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Register;
