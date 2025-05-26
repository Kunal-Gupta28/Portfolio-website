import React, { useState } from 'react'
import { Box, Container, Typography, Grid, Paper, Chip, IconButton, Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import CloseIcon from '@mui/icons-material/Close'
import VisibilityIcon from '@mui/icons-material/Visibility'

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null)

    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
            longDescription: `A comprehensive e-commerce solution that provides a seamless shopping experience. 
                Features include:
                • User authentication and authorization
                • Product catalog with search and filtering
                • Shopping cart and wishlist functionality
                • Secure payment processing with Stripe
                • Order management and tracking
                • Admin dashboard for inventory management
                • Responsive design for all devices`,
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
            github: 'https://github.com/yourusername/ecommerce',
            live: 'https://ecommerce-demo.com',
            image: '/path-to-project-image.jpg',
        },
        {
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
            longDescription: `A powerful task management tool designed for teams to collaborate effectively. 
                Features include:
                • Real-time task updates and notifications
                • Team collaboration and task assignment
                • Progress tracking and analytics
                • Customizable task categories and labels
                • File attachments and comments
                • Calendar integration
                • Mobile-responsive design`,
            technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
            github: 'https://github.com/yourusername/task-manager',
            live: 'https://task-manager-demo.com',
            image: '/path-to-project-image.jpg',
        },
        {
            title: 'Portfolio Website',
            description: 'A modern portfolio website showcasing projects and skills, built with React and Material-UI.',
            longDescription: `A personal portfolio website that showcases my work and skills in an engaging way. 
                Features include:
                • Modern, responsive design
                • Interactive project showcase
                • Skills and experience timeline
                • Contact form with validation
                • Dark mode support
                • Smooth animations and transitions
                • SEO optimization`,
            technologies: ['React', 'Material-UI', 'Framer Motion'],
            github: 'https://github.com/yourusername/portfolio',
            live: 'https://portfolio-demo.com',
            image: '/path-to-project-image.jpg',
        },
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

    return (
        <Box sx={{ minHeight: '100dvh', py: 8, position: 'relative', overflow: 'hidden' }}>
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

                    <Grid container spacing={4}>
                        {projects.map((project, index) => (
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