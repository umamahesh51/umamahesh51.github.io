import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
      >
        {/* Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <Box component="main" flexGrow={1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
        
        {/* Footer */}
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
