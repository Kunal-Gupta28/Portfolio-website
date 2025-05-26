import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box, CssBaseline } from '@mui/material'
import { ThemeProvider } from './context/ThemeContext'
import BackgroundEffects from './components/BackgroundEffects'

// Import all page and component modules
import Landing from './pages/Landing'
import Projects from './pages/Projects'
import Qualifications from './pages/Qualifications'
import About from './pages/About'
import Skills from './pages/Skills'
import Blog from './pages/Blog'
import Contact from './components/Contact'
import Resume from './pages/Resume'
import Testimonials from './pages/Testimonials'

export default function App() {
  return (
    // Theme provider for managing dark/light mode
    <ThemeProvider>
      {/* Reset default browser styles */}
      <CssBaseline />
      {/* Router setup for navigation */}
      <Router>
        {/* Main container with background gradient */}
        <Box 
          sx={{ 
            minHeight: '100dvh',
            bgcolor: 'background.default',
            background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Interactive background effects */}
          <BackgroundEffects />
          
          {/* Main content area with padding for fixed navbar */}
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            {/* Route definitions for different pages */}
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/qualifications" element={<Qualifications />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/testimonials" element={<Testimonials />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  )
}
