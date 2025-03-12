import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/mix.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('mediapipe');

  const userValid = () => {
    let token = localStorage.getItem('userdbtoken');
    if (!token) {
      navigate('*');
    }
  };

  useEffect(() => {
    userValid();
  }, []);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSelect = () => {
    // Handle the selection confirmation here, e.g., save the selected option to state or perform an action
    console.log(`Selected option: ${selectedOption}`);
    switch (selectedOption) {
      case 'mediapipe':
        navigate('/mediapipe');
        break;
      case 'haarcascade':
        navigate('/HaarCascade');
        break;
      case 'opencv':
        navigate('/opencv');
        break;
      case 'deeplearning':
        navigate('/Home');
        break;
      case 'Videolearning':
        navigate('/Video');
      case 'kmitlearning':
        navigate('/KMIT');

      default:
        // Handle other cases or provide a default behavior
        break;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-title">Dashboard</div>
      <form className="options-form">
        <div className="radio-option">
          <p>Select the option through which you want to detect gestures</p>
          <label>
            <input
              type="radio"
              value="mediapipe"
              checked={selectedOption === 'mediapipe'}
              onChange={handleOptionChange}
            />
            Hand Gestures using Mediapipe
          </label>
        </div>
       
        <div className="radio-option">
          <label>
            <input
              type="radio"
              value="opencv"
              checked={selectedOption === 'opencv'}
              onChange={handleOptionChange}
            />
            Hand Gestures using OpenCV
          </label>
        </div>
        <div className="radio-option">
          <label>
            <input
              type="radio"
              value="haarcascade"
              checked={selectedOption === 'haarcascade'}
              onChange={handleOptionChange}
            />
            Face Detection using HaarCascade
          </label>
        </div>
        <div className="radio-option">
          <label>
            <input
              type="radio"
              value="deeplearning"
              checked={selectedOption === 'deeplearning'}
              onChange={handleOptionChange}
            />
            Deep Learning(International Dataset)
          </label>
        </div>
        <div className="radio-option">
          <label>
            <input
              type="radio"
              value="kmitlearning"
              checked={selectedOption === 'kmitlearning'}
              onChange={handleOptionChange}
            />
            Deep Learning(KMIT Dataset)
          </label>
        </div>
        <div className="radio-option">
          <label>
            <input
              type="radio"
              value="Videolearning"
              checked={selectedOption === 'Videolearning'}
              onChange={handleOptionChange}
            />
            Video Learning
          </label>
        </div>
        <div className="select-button">
          <button type="button" onClick={handleSelect}>
            Select
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;