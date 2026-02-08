import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main style={{ flex: 1, paddingTop: '80px' }}> {/* Padding to account for fixed Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
