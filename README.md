# 🖐️ Video Gesture Recognition

## 📖 About the Project
**Video Gesture Recognition** is an AI-powered system designed to recognize and interpret hand gestures using advanced Computer Vision and Deep Learning techniques. This project leverages OpenCV, MediaPipe, Haar Cascade, and Deep Learning models to identify various hand gestures in real-time, making it useful for applications like sign language translation, gesture-based control systems, and interactive user interfaces.

## 🎯 Objectives
✅ Enhance real-time gesture recognition accuracy.  
✅ Optimize the system for real-time performance.  
✅ Enable robust recognition under different lighting conditions.  
✅ Implement sign language communication support.  
✅ Provide an interactive web-based interface for user-friendly interaction.  
✅ Implement face and eye detection using Haar Cascade.  

---

## 🛠️ Tech Stack
| Category       | Technology Used            |
|---------------|----------------------------|
| **Frontend**  | React.js, HTML, CSS, JavaScript |
| **Backend**   | Flask, Node.js, Express.js |
| **Database**  | MongoDB Atlas               |
| **Machine Learning** | TensorFlow, OpenCV, MediaPipe, Haar Cascade |
| **Authentication** | Twilio OTP Verification |

---

## 🚀 Features
✔️ Real-time Hand Gesture Recognition  
✔️ AI-powered Sign Language Translation  
✔️ Hand Tracking & Bounding Box Detection  
✔️ Face and Eye Detection using Haar Cascade  
✔️ Text & Speech Output  
✔️ User-friendly Web Interface  

---

## 📌 Installation & Setup

### **Prerequisites**
Ensure you have the following installed:
- Python 3.x
- Node.js & npm
- Git
- Virtual Environment (`venv`)

### **1️⃣ Clone the Repository**
```sh
 git clone https://github.com/your-username/VideoGestureRecognition.git
 cd VideoGestureRecognition
```

### **2️⃣ Backend Setup (Flask Server)**
```sh
 cd server
 python -m venv venv
 source venv/bin/activate  # (Windows: venv\Scripts\activate)
 pip install -r requirements.txt
 python app.py
```

### **3️⃣ Frontend Setup (React.js)**
```sh
 cd ../frontend
 npm install
 npm start
```

### **4️⃣ Open the App**
Visit `http://localhost:3000` in your browser.

---

## 📂 Project Structure
```
VideoGestureRecognition/
│── frontend/       # React.js Frontend
│── server/         # Flask Backend
│   ├── model/      # AI Model for Gesture Recognition
│   ├── dataset/    # Training Data for ISL gestures
│   ├── app.py      # Flask API for handling requests
│── README.md       # Project Documentation
│── .gitignore      # Ignored Files
```

---

## 📌 How It Works
1️⃣ The user performs a gesture in front of the webcam.  
2️⃣ The Flask backend processes the video feed and detects hand gestures using OpenCV & MediaPipe.  
3️⃣ The Deep Learning model classifies the recognized gesture.  
4️⃣ Haar Cascade detects face and eyes for additional features.  
5️⃣ The text output is displayed, and optional text-to-speech (TTS) conversion occurs.  

---

## 🖼️ Screenshots
![Image](https://github.com/user-attachments/assets/891f80aa-6ed2-4be1-ae67-15424591f79e)
![Image](https://github.com/user-attachments/assets/a26f3c62-4b4d-4737-bc52-a4d6ba9a2f99)
![Image](https://github.com/user-attachments/assets/0303da06-f3d8-42d0-9ab3-777e63f43afa)
![Image](https://github.com/user-attachments/assets/774389ef-3172-4405-8e67-623653991159)
![Image](https://github.com/user-attachments/assets/c9ae6835-fc60-419c-b194-857ecf6adacc)
![Image](https://github.com/user-attachments/assets/e41eef90-f64f-45fc-b221-d0528b5e48cd)
![Image](https://github.com/user-attachments/assets/2dd7775d-53d2-466f-8937-13dec861cf9a)
![Image](https://github.com/user-attachments/assets/5b00390b-10fa-4024-8652-68fc2976b172)
![Image](https://github.com/user-attachments/assets/6470509c-df95-4408-a9f3-be0a612a1228)
![Image](https://github.com/user-attachments/assets/f87ffef5-2407-43df-8b68-bf72716e1e21)
![Image](https://github.com/user-attachments/assets/2b1daaef-0501-47a3-b05d-54aefee4e5de)
![Image](https://github.com/user-attachments/assets/cc4a26f3-33b5-402d-abf1-a38bbf18d39c)



---


## 📌 References
- [OpenCV Hand Gesture Recognition](https://github.com/ishfulthinking/Python-Hand-Gesture-Recognition)
- [MediaPipe Hand Tracking](https://developers.google.com/mediapipe/solutions/vision/hand_tracking)
- [Haar Cascade Face Detection](https://www.analyticsvidhya.com/blog/2022/04/object-detection-using-haar-cascade-opencv/)
- [Deep Learning for Gesture Recognition](https://www.analyticsvidhya.com/blog/2021/05/a-comprehensive-tutorial-on-deep-learning-part-1/)

---

## 📄 License
This project is **open-source** under the MIT License.

---



---



