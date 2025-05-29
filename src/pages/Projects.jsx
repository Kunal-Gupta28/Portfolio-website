import React, { useState } from 'react'
import { Box, Container, Typography, Grid, Paper, Chip, IconButton, Dialog, DialogContent, DialogTitle, Alert } from '@mui/material'
import { motion } from 'framer-motion'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import CloseIcon from '@mui/icons-material/Close'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import Navbar from '../components/Navbar'
import { Javascript } from '@mui/icons-material'

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
            videoDemo: 'https://www.youtube.com/watch?v=your-video-id',
            image: '/path-to-project-image.jpg',
            category: 'Web App',
            hasApiDependency: true
        },
        {
            title: 'Image Enhancer',
            description: 'A sleek and responsive frontend application that allows users to enhance their images using the powerful PicWish API. With just a few clicks, users can upload and enhance images with features like background removal, sharpening, and more.',
            longDescription: `A modern image enhancement application that leverages the power of PicWish API to provide professional-grade image editing capabilities.
                Features include:
                • Image upload and processing
                • Background removal
                • Image sharpening and enhancement
                • Real-time preview
                • Responsive design for all devices
                • Modern and intuitive user interface
                • Seamless integration with PicWish cloud service
                • Fast and efficient image processing`,
            technologies: ['React.js', 'PicWish API', 'Material-UI', 'Vite', 'CSS3'],
            github: 'https://github.com/Kunal-Gupta28/Image-enhancer',
            live: 'https://image-enhancer-azure.vercel.app',
            videoDemo: 'https://www.youtube.com/watch?v=your-video-id',
            image: '/path-to-project-image.jpg',
            category: 'Web App',
            hasApiDependency: true
        },
        {
            title: 'CyberFiction - Landing Page',
            description: 'A visually immersive and interactive landing page built to showcase modern web animations, smooth scrolling, and dynamic themes using cutting-edge frontend technologies.',
            longDescription: `CyberFiction is a high-performance, visually interactive landing page designed to captivate users with a seamless user experience.
                Key features include:
                • Smooth scroll effects using Locomotive Scroll
                • Scroll-triggered animations powered by GSAP
                • Custom loading screen with canvas-based animation
                • Light/Dark mode toggle with persistent theme state
                • Responsive layout optimized for all devices
                • Stunning visual storytelling with parallax and scroll-based effects`,
            technologies: ['Html', 'CSS3', 'Javascript', 'GSAP (ScrollTrigger)',  'Locomotive Scroll'],
            github: 'https://github.com/Kunal-Gupta28/Cyberfiction',
            live: 'https://cyberfiction-pi.vercel.app',
            videoDemo: 'https://www.youtube.com/watch?v=your-video-id',
            image: '/path-to-project-image.jpg',
            category: 'Web App',
            hasApiDependency: false

        },
        {
            title: 'WanderLust - Travel Sharing App',
            description: 'A full-stack travel destination sharing platform where users can post, explore, and review scenic locations around the world.',
            longDescription: `WanderLust is a dynamic web application that allows users to share and discover travel destinations with rich visuals and community feedback.
                Key features include:
                • User authentication and session management using Express-session
                • Flash messaging for real-time user notifications
                • Destination posting with image uploads via Cloudinary
                • MongoDB-based data management (hosted on MongoDB Atlas)
                • Clean, server-rendered UI using EJS templating
                • Responsive design for desktop and mobile
                • CRUD operations for destinations and reviews`,
            technologies: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Cloudinary', 'EJS', 'Express-session', 'Connect-flash'],
            github: 'https://github.com/Kunal-Gupta28/WanderLust',
            live: 'https://offends.onrender.com',
            videoDemo: '',
            image: '/path-to-wanderlust-image.jpg',
            category: 'Web App',
            hasApiDependency: false
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
                                            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            maxWidth: '320px',
                                            margin: '0 auto',
                                            transform: 'scale(0.95)',
                                            '&:hover': {
                                                backgroundColor: 'rgba(124, 77, 255, 0.05)',
                                                borderColor: 'primary.main',
                                                boxShadow: '0 8px 32px rgba(124, 77, 255, 0.2)',
                                                transform: 'scale(1)',
                                                '&::before': {
                                                    opacity: 1,
                                                },
                                                '& .project-title': {
                                                    background: 'linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)',
                                                    backgroundClip: 'text',
                                                    textFillColor: 'transparent',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                },
                                                '& .action-buttons': {
                                                    '& .MuiChip-root': {
                                                        minWidth: '90px',
                                                        '& .MuiChip-label': {
                                                            opacity: 1,
                                                            width: 'auto',
                                                            padding: '0 12px',
                                                        }
                                                    }
                                                },
                                                '& .api-note': {
                                                    opacity: 1,
                                                    transform: 'translateY(0)',
                                                    height: 'auto',
                                                    marginTop: '16px',
                                                }
                                            },
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                height: '4px',
                                                background: 'linear-gradient(90deg, #7C4DFF, #00E5FF)',
                                                opacity: 0,
                                                transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                            }
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            component="h2"
                                            className="project-title"
                                            sx={{ 
                                                mb: 2, 
                                                color: 'primary.main',
                                                fontWeight: 'bold',
                                                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                                textAlign: 'center',
                                            }}
                                        >
                                            {project.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{ 
                                                mb: 3, 
                                                color: 'text.secondary', 
                                                flexGrow: 1,
                                                lineHeight: 1.6,
                                                fontSize: '0.95rem',
                                                textAlign: 'center',
                                                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                            }}
                                        >
                                            {project.description}
                                        </Typography>
                                        <Box sx={{ 
                                            mb: 3, 
                                            display: 'flex', 
                                            justifyContent: 'center', 
                                            flexWrap: 'wrap', 
                                            gap: 1,
                                            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                        }}>
                                            {project.technologies.map((tech, techIndex) => (
                                                <Chip
                                                    key={techIndex}
                                                    label={tech}
                                                    size="small"
                                                    sx={{
                                                        backgroundColor: 'rgba(124, 77, 255, 0.1)',
                                                        color: 'primary.main',
                                                        backdropFilter: 'blur(12px)',
                                                        border: '1px solid rgba(124, 77, 255, 0.2)',
                                                        fontSize: '0.75rem',
                                                        height: '24px',
                                                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                                        '&:hover': {
                                                            backgroundColor: 'rgba(124, 77, 255, 0.2)',
                                                            transform: 'translateY(-2px)',
                                                        },
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                        <Box className="action-buttons" sx={{ 
                                            display: 'flex', 
                                            gap: 1.5, 
                                            flexWrap: 'wrap',
                                            justifyContent: 'center',
                                            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                            '& .MuiChip-root': {
                                                minWidth: '32px',
                                                height: '32px',
                                                fontSize: '0.85rem',
                                                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                                '& .MuiChip-label': {
                                                    opacity: 0,
                                                    width: 0,
                                                    padding: 0,
                                                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                                }
                                            }
                                        }}>
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
                                                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(124, 77, 255, 0.2)',
                                                        transform: 'translateY(-2px)',
                                                    },
                                                }}
                                            />
                                            <Chip
                                                icon={<LaunchIcon />}
                                                label="Try Now"
                                                clickable
                                                component="a"
                                                href={project.live}
                                                target="_blank"
                                                sx={{
                                                    backgroundColor: 'rgba(124, 77, 255, 0.1)',
                                                    color: 'primary.main',
                                                    backdropFilter: 'blur(12px)',
                                                    border: '1px solid rgba(124, 77, 255, 0.2)',
                                                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(124, 77, 255, 0.2)',
                                                        transform: 'translateY(-2px)',
                                                    },
                                                }}
                                            />
                                            <Chip
                                                icon={<VideoLibraryIcon />}
                                                label="Video Demo"
                                                clickable
                                                component="a"
                                                href={project.videoDemo}
                                                target="_blank"
                                                sx={{
                                                    backgroundColor: 'rgba(124, 77, 255, 0.1)',
                                                    color: 'primary.main',
                                                    backdropFilter: 'blur(12px)',
                                                    border: '1px solid rgba(124, 77, 255, 0.2)',
                                                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(124, 77, 255, 0.2)',
                                                        transform: 'translateY(-2px)',
                                                    },
                                                }}
                                            />
                                            <Chip
                                                icon={<VisibilityIcon />}
                                                label="Details"
                                                clickable
                                                onClick={() => setSelectedProject(project)}
                                                sx={{
                                                    backgroundColor: 'rgba(124, 77, 255, 0.1)',
                                                    color: 'primary.main',
                                                    backdropFilter: 'blur(12px)',
                                                    border: '1px solid rgba(124, 77, 255, 0.2)',
                                                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(124, 77, 255, 0.2)',
                                                        transform: 'translateY(-2px)',
                                                    },
                                                }}
                                            />
                                        </Box>
                                        {project.hasApiDependency && (
                                            <Alert 
                                                severity="info" 
                                                className="api-note"
                                                sx={{ 
                                                    backgroundColor: 'rgba(124, 77, 255, 0.1)',
                                                    color: 'primary.main',
                                                    border: '1px solid rgba(124, 77, 255, 0.2)',
                                                    fontSize: '0.85rem',
                                                    opacity: 0,
                                                    transform: 'translateY(10px)',
                                                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                                    height: 0,
                                                    marginTop: 0,
                                                    '& .MuiAlert-icon': {
                                                        color: 'primary.main'
                                                    }
                                                }}
                                            >
                                                Note: This project uses external APIs. If the demo is not working, it may be due to the end of API free trials.
                                            </Alert>
                                        )}
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
                                {selectedProject.hasApiDependency && (
                                    <Alert 
                                        severity="info" 
                                        sx={{ 
                                            mb: 3,
                                            backgroundColor: 'rgba(124, 77, 255, 0.1)',
                                            color: 'primary.main',
                                            border: '1px solid rgba(124, 77, 255, 0.2)',
                                            '& .MuiAlert-icon': {
                                                color: 'primary.main'
                                            }
                                        }}
                                    >
                                        Note: This project uses external APIs. If the demo is not working, it may be due to the end of API free trials.
                                    </Alert>
                                )}
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