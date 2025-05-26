// Navbar.jsx - Top navigation bar for the portfolio app
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Box,
  Fab,
  Menu,
  MenuItem,
  IconButton,
  Tooltip,
} from '@mui/material'
import { motion } from 'framer-motion'
import HomeIcon from '@mui/icons-material/Home'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import MenuIcon from '@mui/icons-material/Menu'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import PersonIcon from '@mui/icons-material/Person'
import CodeIcon from '@mui/icons-material/Code'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const { mode, toggleTheme } = useTheme()
  const location = useLocation()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const navItems = [
    { label: 'Home', to: '/', icon: <HomeIcon /> },
    { label: 'About', to: '/about', icon: <PersonIcon /> },
    { label: 'Skills', to: '/skills', icon: <CodeIcon /> },
    { label: 'Projects', to: '/projects', icon: <WorkIcon /> },
    { label: 'Qualifications', to: '/qualifications', icon: <SchoolIcon /> },
  ]

  return (
    <>
      {/* AppBar is fixed at the top */}
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(16, 20, 24, 0.8)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: 'rgba(16, 20, 24, 0.9)',
          },
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'center', gap: 2, minHeight: '64px', flexWrap: 'wrap' }}>
            {navItems.map(({ label, to, icon }) => (
              <motion.div 
                key={label} 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  component={Link}
                  to={to}
                  startIcon={icon}
                  sx={{
                    color: 'primary.main',
                    position: 'relative',
                    '&:hover': { 
                      backgroundColor: 'rgba(144, 202, 249, 0.08)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: location.pathname === to ? '100%' : '0%',
                      height: '2px',
                      backgroundColor: 'primary.main',
                      transition: 'all 0.3s ease-in-out',
                      transform: 'translateX(-50%)',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  {label}
                </Button>
              </motion.div>
            ))}
            <Tooltip title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <IconButton
                  onClick={toggleTheme}
                  sx={{
                    color: 'primary.main',
                    '&:hover': { 
                      backgroundColor: 'rgba(144, 202, 249, 0.08)',
                    },
                  }}
                >
                  {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </motion.div>
            </Tooltip>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Spacer for fixed AppBar */}
      <Box sx={{ height: '64px' }} />

      {/* Floating Action Button */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
        }}
      >
        <motion.div 
          style={{ display: 'inline-block' }} 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
        >
          <Tooltip title="Quick Links">
            <Fab
              color="primary"
              aria-label="menu"
              onClick={handleMenu}
              sx={{
                background: 'linear-gradient(45deg, #90CAF9 30%, #64B5F6 90%)',
                boxShadow: '0 3px 5px 2px rgba(144, 202, 249, .3)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #64B5F6 30%, #90CAF9 90%)',
                },
              }}
            >
              <MenuIcon />
            </Fab>
          </Tooltip>
        </motion.div>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            sx: {
              backgroundColor: 'rgba(16, 20, 24, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              mt: 1,
            },
          }}
        >
          <MenuItem
            component="a"
            href="https://github.com/Kunal-Gupta28"
            target="_blank"
            onClick={handleClose}
            sx={{ 
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(144, 202, 249, 0.08)',
              },
            }}
          >
            <GitHubIcon sx={{ mr: 1 }} /> GitHub
          </MenuItem>
          <MenuItem
            component="a"
            href="https://www.linkedin.com/in/kunal-gupta-b7bb7a216/"
            target="_blank"
            onClick={handleClose}
            sx={{ 
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(144, 202, 249, 0.08)',
              },
            }}
          >
            <LinkedInIcon sx={{ mr: 1 }} /> LinkedIn
          </MenuItem>
          <MenuItem
            component="a"
            href="mailto:kunal.gupta.91165@gmail.com"
            onClick={handleClose}
            sx={{ 
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(144, 202, 249, 0.08)',
              },
            }}
          >
            <EmailIcon sx={{ mr: 1 }} /> Email
          </MenuItem>
          <MenuItem
            component="a"
            href="https://wa.me/yourphonenumber"
            target="_blank"
            onClick={handleClose}
            sx={{ 
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(144, 202, 249, 0.08)',
              },
            }}
          >
            <WhatsAppIcon sx={{ mr: 1 }} /> WhatsApp
          </MenuItem>
        </Menu>
      </Box>
    </>
  )
}

export default Navbar