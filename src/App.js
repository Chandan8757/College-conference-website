import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Contact from './components/Contact';
import Register from './components/Register';
import Venue from './components/Venue'; // Import the Venue component
import './App.css';

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/venue" element={<Venue />} /> {/* Add Venue route */}
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;