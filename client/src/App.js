import Login from './pages/login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Otp from './pages/Otp';
import Error from './pages/Error';
import Mediapipe from './pages/Mediapipe';
import Haarcascade from './pages/HaarCascade';
import Opencv from './pages/OpenCV';
import Headers from './components/Headers';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Video from './pages/Video';
import Kmit from './pages/Kmit';
import './App.css';

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/user/otp' element={<Otp />} />
        <Route path='/mediapipe' element={<Mediapipe />} />
        <Route path='/haarcascade' element={<Haarcascade />} />
        <Route path='/opencv' element={<Opencv />} />
        <Route path='/home' element={<Home />} />
        <Route path='/video' element={<Video />} />
        <Route path='/kmit' element={<Kmit />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;