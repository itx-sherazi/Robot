import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Result from './pages/Result';
import ByCreadt from './pages/ByCreadt';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar/>
            <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/result' element={<Result/>} />
          <Route path='/buy' element={<ByCreadt/>} />
        </Routes>
        <Footer/>
   
    </div>
  );
}

export default App;
