// src/components/Navbar.jsx
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
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material'
import { useTheme as useMuiTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'
import MenuIcon from '@mui/icons-material/Menu'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useTheme } from '../context/ThemeContext'
import { NAV_ITEMS, QUICK_LINKS } from '../data/navbarData'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { mode, toggleTheme } = useTheme()
  const location = useLocation()
  const muiTheme = useMuiTheme()
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'))

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget)
  const handleMenuClose = () => setAnchorEl(null)
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev)

  /* -------------------- Drawer -------------------- */
  const drawer = (
    <Box sx={{ width: 250, height: '100%', background: '#0A0A0A' }}>
      <List>
        {NAV_ITEMS.map(({ label, to, icon: Icon }) => (
          <ListItem
            key={label}
            button
            component={Link}
            to={to}
            selected={location.pathname === to}
            onClick={handleDrawerToggle}
            sx={{
              color: 'primary.main',
              '&.Mui-selected, &:hover': {
                backgroundColor: 'rgba(144, 202, 249, 0.08)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'primary.main' }}>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        <ListItem button onClick={toggleTheme}>
          <ListItemIcon sx={{ color: 'primary.main' }}>
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </ListItemIcon>
          <ListItemText
            primary={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
          />
        </ListItem>
      </List>
    </Box>
  )

  return (
    <>
      {/* -------------------- AppBar -------------------- */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(16, 20, 24, 0.85)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            {isMobile ? (
              <>
                <IconButton color="primary" onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>

                <IconButton color="primary" onClick={toggleTheme}>
                  {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </>
            ) : (
              <>
                <Box sx={{ display: 'flex', gap: 2, flexGrow: 1, justifyContent: 'center' }}>
                  {NAV_ITEMS.map(({ label, to, icon: Icon }) => (
                    <motion.div key={label} whileHover={{ scale: 1.05 }}>
                      <Button
                        component={Link}
                        to={to}
                        startIcon={<Icon />}
                        sx={{
                          color: 'primary.main',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: '50%',
                            width: location.pathname === to ? '100%' : 0,
                            height: 2,
                            backgroundColor: 'primary.main',
                            transform: 'translateX(-50%)',
                            transition: 'width 0.3s',
                          },
                          '&:hover::after': { width: '100%' },
                        }}
                      >
                        {label}
                      </Button>
                    </motion.div>
                  ))}
                </Box>

                <Tooltip title="Toggle theme">
                  <IconButton color="primary" onClick={toggleTheme}>
                    {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                  </IconButton>
                </Tooltip>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* -------------------- Drawer -------------------- */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: 250 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer */}
      <Box sx={{ height: 64 }} />

      {/* -------------------- Floating Quick Links -------------------- */}
      <Box sx={{ position: 'fixed', bottom: 24, right: 24 }}>
        <Fab color="primary" onClick={handleMenuOpen}>
          <MenuIcon />
        </Fab>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          {QUICK_LINKS.map(({ label, href, icon: Icon }) => (
            <MenuItem
              key={label}
              component="a"
              href={href}
              target="_blank"
              onClick={handleMenuClose}
            >
              <Icon />
              <Box sx={{ ml: 1 }}>{label}</Box>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  )
}

export default Navbar
