import { Link } from 'react-router-dom'
import { Box, Typography, Button, Container } from '@mui/material'
import { motion } from 'framer-motion'
import HomeIcon from '@mui/icons-material/Home'

const NotFound = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          py: 8,
        }}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '8rem', md: '12rem' },
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #90CAF9 30%, #64B5F6 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
            }}
          >
            404
          </Typography>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'primary.main',
              mb: 3,
              fontWeight: 'medium',
            }}
          >
            Oops! Page Not Found
          </Typography>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 4,
              maxWidth: '600px',
            }}
          >
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track!
          </Typography>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            component={Link}
            to="/"
            variant="contained"
            size="large"
            startIcon={<HomeIcon />}
            sx={{
              background: 'linear-gradient(45deg, #90CAF9 30%, #64B5F6 90%)',
              boxShadow: '0 3px 5px 2px rgba(144, 202, 249, .3)',
              '&:hover': {
                background: 'linear-gradient(45deg, #64B5F6 30%, #90CAF9 90%)',
              },
            }}
          >
            Back to Home
          </Button>
        </motion.div>
      </Box>
    </Container>
  )
}

export default NotFound 