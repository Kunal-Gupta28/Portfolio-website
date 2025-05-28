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
import Contact from './pages/Contact'
import NotFound from "./pages/NotFound"

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
            width: '100%',
            bgcolor: 'background.default',
            background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Interactive background effects */}
          <BackgroundEffects />
          
          {/* Main content area with padding for fixed navbar */}
          <Box sx={{ position: 'relative', zIndex: 1, width: '100%', overflow: 'hidden' }}>
            {/* Route definitions for different pages */}
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/qualifications" element={<Qualifications />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              {/* Catch all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  )
}
