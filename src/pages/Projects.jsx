import React, { useState } from 'react'
import { Box, Container, Typography, Grid, Paper, Chip, IconButton, Dialog, DialogContent, DialogTitle } from '@mui/material'
import { motion } from 'framer-motion'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import CloseIcon from '@mui/icons-material/Close'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Navbar from '../components/Navbar'

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null)

    const projects = [
        {
            title: 'Kuber Ride Booking App',
            description: 'A modern ride booking application with real-time tracking, fare estimation, and seamless payment integration. Built with MERN stack and modern web technologies for a beautiful user interface.',
            longDescription: `A comprehensive ride booking solution that provides a seamless experience for both riders and drivers. 
                Features include:
                • User authentication and profile management
                • Real-time location tracking and route visualization
                • Fare estimation based on distance and time
                • Secure payment processing with Razorpay
                • Ride history and receipts
                • Driver ratings and reviews
                • Responsive design for all devices
                • Dark mode support
                • Real-time updates using Socket.io
                • Smooth animations with GSAP
                • Image upload and management with Cloudinary`,
            technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io', 'GSAP', 'Cloudinary', 'Razorpay', 'Tailwind CSS'],
            github: 'https://github.com/Kunal-Gupta28/kuber',
            live: 'https://kuber-tau.vercel.app',
            image: '/path-to-project-image.jpg',
            category: 'Web App'
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99],
            },
        },
    }

    // Add category filter state
    const [selectedCategory, setSelectedCategory] = useState('Web App')

    // Get unique categories
    const categories = ['All', 'Web App', 'Mobile App', 'ML/AI']

    // Filter projects based on selected category
    const filteredProjects = selectedCategory === 'All' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory)

    return (
        <Box sx={{ minHeight: '100dvh', py: 8, position: 'relative', overflow: 'hidden' }}>

            {/* navbar */}
            <Navbar />

            {/* Animated background elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                    overflow: 'hidden',
                }}
            >
                {[...Array(20)].map((_, index) => (
                    <motion.div
                        key={index}
                        style={{
                            position: 'absolute',
                            width: '3px',
                            height: '3px',
                            background: 'rgba(124, 77, 255, 0.5)',
                            borderRadius: '50%',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [1, 2.5, 1],
                            opacity: [0.3, 0.8, 0.3],
                            x: [0, Math.random() * 100 - 50, 0],
                            y: [0, Math.random() * 100 - 50, 0],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </Box>

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <Typography
                            variant="h3"
                            component="h1"
                            sx={{
                                textAlign: 'center',
                                mb: 6,
                                fontWeight: 'bold',
                                background: 'linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)',
                                backgroundClip: 'text',
                                textFillColor: 'transparent',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                filter: 'drop-shadow(0 0 20px rgba(124, 77, 255, 0.3))',
                            }}
                        >
                            My Projects
                        </Typography>
                    </motion.div>

                    {/* Category Filter */}
                    <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                        {categories.map((category) => (
                            <Chip
                                key={category}
                                label={category}
                                onClick={() => setSelectedCategory(category)}
                                sx={{
                                    backgroundColor: selectedCategory === category 
                                        ? 'primary.main' 
                                        : 'rgba(124, 77, 255, 0.1)',
                                    color: selectedCategory === category 
                                        ? 'white' 
                                        : 'primary.main',
                                    '&:hover': {
                                        backgroundColor: selectedCategory === category 
                                            ? 'primary.dark' 
                                            : 'rgba(124, 77, 255, 0.2)',
                                    },
                                    transition: 'all 0.3s ease-in-out',
                                }}
                            />
                        ))}
                    </Box>

                    <Grid container spacing={4}>
                        {filteredProjects.map((project, index) => (
                            <Grid item xs={12} md={6} lg={4} key={index}>
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            p: 3,
                                            backgroundColor: 'rgba(20, 20, 20, 0.8)',
                                            backdropFilter: 'blur(12px)',
                                            border: '1px solid rgba(124, 77, 255, 0.1)',
                                            transition: 'all 0.3s ease-in-out',
                                            '&:hover': {
                                                backgroundColor: 'rgba(124, 77, 255, 0.05)',
                                                borderColor: 'primary.main',
                                                boxShadow: '0 8px 32px rgba(124, 77, 255, 0.2)',
                                            },
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            component="h2"
                                            sx={{ mb: 2, color: 'primary.main' }}
                                        >
                                            {project.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{ mb: 3, color: 'text.secondary', flexGrow: 1 }}
                                        >
                                            {project.description}
                                        </Typography>
                                        <Box sx={{ mb: 3 }}>
                                            {project.technologies.map((tech, techIndex) => (
                                                <Chip
                                                    key={techIndex}
                                                    label={tech}
                                                    size="small"
                                                    sx={{
                                                        mr: 1,
                                                        mb: 1,
                                                        backgroundColor: 'rgba(124, 77, 255, 0.1)',
                                                        color: 'primary.main',
                                                        backdropFilter: 'blur(12px)',
                                                        border: '1px solid rgba(124, 77, 255, 0.2)',
                                                        '&:hover': {
                                                            backgroundColor: 'rgba(124, 77, 255, 0.2)',
                                                            transform: 'translateY(-2px)',
                                                        },
                                                        transition: 'all 0.3s ease-in-out',
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                        <Box sx={{ display: 'flex', gap: 2 }}>
                                            <Chip
                                                icon={<GitHubIcon />}
                                                label="GitHub"
                                                clickable
                                                component="a"
                                                href={project.github}
                                                target="_blank"
                                                sx={{
                                                    backgroundColor: 'rgba(124, 77, 255, 0.1)',
                                                    color: 'primary.main',
                                                    backdropFilter: 'blur(12px)',
                                                    border: '1px solid rgba(124, 77, 255, 0.2)',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(124, 77, 255, 0.2)',
                                                        transform: 'translateY(-2px)',
                                                    },
                                                    transition: 'all 0.3s ease-in-out',
                                                }}
                                            />
                                            <Chip
                                                icon={<LaunchIcon />}
                                                label="Live Demo"
                                                clickable
                                                component="a"
                                                href={project.live}
                                                target="_blank"
                                                sx={{
                                                    backgroundColor: 'rgba(124, 77, 255, 0.1)',
                                                    color: 'primary.main',
                                                    backdropFilter: 'blur(12px)',
                                                    border: '1px solid rgba(124, 77, 255, 0.2)',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(124, 77, 255, 0.2)',
                                                        transform: 'translateY(-2px)',
                                                    },
                                                    transition: 'all 0.3s ease-in-out',
                                                }}
                                            />
                                            <IconButton
                                                onClick={() => setSelectedProject(project)}
                                                sx={{
                                                    color: 'primary.main',
                                                    backdropFilter: 'blur(12px)',
                                                    backgroundColor: 'rgba(124, 77, 255, 0.1)',
                                                    border: '1px solid rgba(124, 77, 255, 0.2)',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(124, 77, 255, 0.2)',
                                                        transform: 'translateY(-2px)',
                                                    },
                                                    transition: 'all 0.3s ease-in-out',
                                                }}
                                            >
                                                <VisibilityIcon />
                                            </IconButton>
                                        </Box>
                                    </Paper>
                                </motion.div>
                            </Grid>
                        ))}
                        {(selectedCategory === 'Mobile App' || selectedCategory === 'ML/AI' || selectedCategory === 'All') && (
                            <Grid item xs={12}>
                                <motion.div
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 4,
                                            textAlign: 'center',
                                            backgroundColor: 'rgba(20, 20, 20, 0.8)',
                                            backdropFilter: 'blur(12px)',
                                            border: '1px solid rgba(124, 77, 255, 0.1)',
                                            transition: 'all 0.3s ease-in-out',
                                            '&:hover': {
                                                backgroundColor: 'rgba(124, 77, 255, 0.05)',
                                                borderColor: 'primary.main',
                                                boxShadow: '0 8px 32px rgba(124, 77, 255, 0.2)',
                                            },
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                mb: 2,
                                                color: 'primary.main',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Coming Soon!
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'text.secondary',
                                                maxWidth: '600px',
                                                margin: '0 auto',
                                            }}
                                        >
                                            {selectedCategory === 'Mobile App' 
                                                ? 'Exciting mobile applications are in development! Stay tuned for innovative solutions using React Native and modern mobile development practices.'
                                                : selectedCategory === 'ML/AI'
                                                ? 'Fascinating AI and Machine Learning projects are in the works! Exploring the frontiers of artificial intelligence and its practical applications.'
                                                : 'More exciting projects are coming soon! Including mobile applications and AI/ML solutions.'}
                                        </Typography>
                                    </Paper>
                                </motion.div>
                            </Grid>
                        )}
                    </Grid>
                </motion.div>

                {/* Project Details Dialog */}
                <Dialog
                    open={Boolean(selectedProject)}
                    onClose={() => setSelectedProject(null)}
                    maxWidth="md"
                    fullWidth
                    PaperProps={{
                        sx: {
                            backgroundColor: 'rgba(20, 20, 20, 0.95)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(124, 77, 255, 0.1)',
                            boxShadow: '0 8px 32px rgba(124, 77, 255, 0.2)',
                        },
                    }}
                >
                    {selectedProject && (
                        <>
                            <DialogTitle sx={{ color: 'primary.main' }}>
                                {selectedProject.title}
                                <IconButton
                                    onClick={() => setSelectedProject(null)}
                                    sx={{
                                        position: 'absolute',
                                        right: 8,
                                        top: 8,
                                        color: 'primary.main',
                                        backdropFilter: 'blur(12px)',
                                        backgroundColor: 'rgba(124, 77, 255, 0.1)',
                                        border: '1px solid rgba(124, 77, 255, 0.2)',
                                        '&:hover': {
                                            backgroundColor: 'rgba(124, 77, 255, 0.2)',
                                            transform: 'translateY(-2px)',
                                        },
                                        transition: 'all 0.3s ease-in-out',
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </DialogTitle>
                            <DialogContent>
                                <Typography
                                    variant="body1"
                                    sx={{ color: 'text.secondary', whiteSpace: 'pre-line', mb: 3 }}
                                >
                                    {selectedProject.longDescription}
                                </Typography>
                                <Box sx={{ mb: 3 }}>
                                    {selectedProject.technologies.map((tech, index) => (
                                        <Chip
                                            key={index}
                                            label={tech}
                                            size="small"
                                            sx={{
                                                mr: 1,
                                                mb: 1,
                                                backgroundColor: 'rgba(124, 77, 255, 0.1)',
                                                color: 'primary.main',
                                                backdropFilter: 'blur(12px)',
                                                border: '1px solid rgba(124, 77, 255, 0.2)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(124, 77, 255, 0.2)',
                                                    transform: 'translateY(-2px)',
                                                },
                                                transition: 'all 0.3s ease-in-out',
                                            }}
                                        />
                                    ))}
                                </Box>
                            </DialogContent>
                        </>
                    )}
                </Dialog>
            </Container>
        </Box>
    )
}

export default Projects 