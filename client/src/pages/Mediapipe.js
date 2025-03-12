import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // Auto-refresh the video feed every 100 milliseconds
    const refreshVideoFeed = () => {
      const videoFeed = document.getElementById('video_feed_media');
      if (videoFeed) {
        videoFeed.src = `http://localhost:8070/video_feed_media?${new Date().getTime()}`;
      }
    };

    const intervalId = setInterval(refreshVideoFeed, 100);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

    // Function to stop the Python file
    const stopPythonFile = async () => {
      try {
        // Display a confirmation dialog
        const confirmed = window.confirm('Are you sure you want to stop the Video?');
        if (!confirmed) {
          return; // Do nothing if the user cancels the operation
        }
  
        // Send a POST request to the endpoint responsible for stopping the Python file
        const response = await fetch('http://localhost:8070/stop_python_file', {
          method: 'POST',
        });
  
        if (response.ok) {
          console.log('Python file stopped successfully');
        } else {
          console.error('Failed to stop Python file');
        }
      } catch (error) {
        console.error('Error stopping Python file:', error);
      }
    };
  

  return (
    <div>
      <h1>Hand Gesture Recognition Using Mediapipe</h1>
      <img id="video_feed_media" src="http://localhost:8070/video_feed_media" alt="Hand Gesture Feed" />

      {/* Button to stop the Python file */}
      <button onClick={stopPythonFile}>STOP VIDEO</button>
    </div>
  );
};

export default App;
