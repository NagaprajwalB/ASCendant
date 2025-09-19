import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Analyze from './components/Analyze';
import SkinCare from './components/SkinCare';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" style={{backgroundImage: 'url(/images/your-background-image.jpg)'}}>
        <div className="absolute inset-0 bg-white bg-opacity-30"></div>
        <div className="relative z-10">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/analyze" element={<Analyze />} />
            <Route path="/skincare" element={<SkinCare />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;