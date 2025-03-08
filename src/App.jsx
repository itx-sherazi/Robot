import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './page/Login';
import Register from './page/Register';
import Dashboard from './page/Dashboard';
import UploadPage from './page/UploadPage';
import LogoutPage from './page/Logout';
import PaymentPage from './page/PaymentPage';
import LicenseKeyPage from './page/LicencesKey';
import SetEARobot from './page/EaRobot';

function App() {
  return (
    <div>
            <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/uploadpage' element={<UploadPage/>} />
          <Route path='/logout' element={<LogoutPage/>} />
          <Route path='/payment' element={<PaymentPage/>} />
          <Route path='/licences' element={<LicenseKeyPage/>} />
          <Route path='/earobot'element={<SetEARobot/>} />
        </Routes>
   
    </div>
  );
}

export default App;
