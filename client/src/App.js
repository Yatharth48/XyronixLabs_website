import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Products from './Pages/Products';
import Services from './Pages/Services';
import Research from './Pages/Research';
import Gallery from './Pages/Gallery';
import ContactUs from './Pages/ContactUs';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/research" element={<Research />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;