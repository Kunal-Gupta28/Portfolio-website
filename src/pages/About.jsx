import React from 'react';
import { Box, Container, Typography, Paper, Grid, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar'

const About = () => {
    const { mode } = useTheme();

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // Add bounce animation variant
    const bounceVariants = {
        bounce: {
            y: [0, -15, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
            }
        }
    };

    const interests = [
        {
            icon: <CodeIcon sx={{ fontSize: 40 }} />,
            title: "Full-Stack Development",
            description: "Passionate about building end-to-end web applications using the MERN stack. Experienced in both frontend and backend development, with a focus on creating scalable and maintainable solutions."
        },
        {
            icon: <BrushIcon sx={{ fontSize: 40 }} />,
            title: "Mobile & AI Development",
            description: "Exploring mobile app development and artificial intelligence. Interested in creating cross-platform mobile applications and implementing AI solutions to solve real-world problems."
        },
        {
            icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
            title: "Cybersecurity & Problem Solving",
            description: "Fascinated by cybersecurity challenges and ethical hacking. Enjoy tackling complex technical problems across domains, from securing applications to implementing robust system architectures."
        }
    ];

    return (
        <Box sx={{ minHeight: '100vh', py: 8 }}>

            {/* navbar */}
            <Navbar/>

            <Container maxWidth="lg">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            textAlign: 'center',
                            mb: 6,
                            fontWeight: 'bold',
                            background: 'linear-gradient(45deg, #90CAF9 30%, #64B5F6 90%)',
                            backgroundClip: 'text',
                            textFillColor: 'transparent',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        About Me
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                }}
                            >
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            width: { xs: 200, md: 250 },
                                            height: { xs: 200, md: 250 },
                                            margin: '0 auto',
                                        }}
                                    >
                                        {/* Outer glow ring */}
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.1, 1],
                                                opacity: [0.5, 0.8, 0.5],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                            }}
                                            style={{
                                                position: 'absolute',
                                                top: -10,
                                                left: -10,
                                                right: -10,
                                                bottom: -10,
                                                borderRadius: '50%',
                                                background: `radial-gradient(circle, ${
                                                    mode === 'dark' ? 'rgba(124, 77, 255, 0.3)' : 'rgba(69, 39, 160, 0.3)'
                                                } 0%, transparent 70%)`,
                                                zIndex: 0,
                                            }}
                                        />
                                        
                                        {/* Profile picture */}
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                        >
                                            <Box sx={{ position: 'relative' }}>
                                                <motion.div
                                                    animate="bounce"
                                                    variants={bounceVariants}
                                                >
                                                    <Avatar
                                                        src="/images/non-bg.png"
                                                        alt="Profile"
                                                        sx={{
                                                            width: '100%',
                                                            height: '100%',
                                                            border: '4px solid',
                                                            borderColor: 'primary.main',
                                                            boxShadow: mode === 'dark'
                                                                ? '0 0 30px rgba(124, 77, 255, 0.5)'
                                                                : '0 0 30px rgba(69, 39, 160, 0.5)',
                                                            transition: 'all 0.3s ease-in-out',
                                                            '&:hover': {
                                                                boxShadow: mode === 'dark'
                                                                    ? '0 0 40px rgba(124, 77, 255, 0.7)'
                                                                    : '0 0 40px rgba(69, 39, 160, 0.7)',
                                                            },
                                                        }}
                                                    />
                                                </motion.div>
                                            </Box>
                                        </motion.div>
                                    </Box>
                                </Box>
                                <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
                                    My Journey
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                                    Hello! I'm <b className='text-white'>Kunal Gupta</b>, a passionate <b className='text-white'>Computer Science & Electronics and Communication Engineering (ECE) student</b> at <b className='text-white'>DTU</b>, 
                                    currently in my final year. My journey in technology began at the end of my second year, 
                                    when I discovered my passion for programming and started exploring various coding concepts and technologies.
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                                    While I'm a <b className='text-white'>Full-Stack MERN Developer</b>, my interests span across multiple domains. I'm passionate about 
                                    <b className='text-white'> mobile app development, artificial intelligence, and machine learning. My creative side enjoys photo and video editing,
                                    while my electronics background keeps me engaged with hardware projects</b>. I love exploring different programming paradigms, 
                                    algorithms, and software development concepts. My project, the Kuber Ride Booking App, demonstrates my 
                                    full-stack capabilities, featuring real-time updates with Socket.io, secure authentication, and 
                                    seamless payment integration.
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    As a <b className='text-white'>fresher in the tech industry</b>, I'm eager to learn and grow. I'm <b className='text-white'>constantly 
                                    exploring new technologies and best practices</b> in both frontend and backend development, and I'm excited about 
                                    the opportunity to contribute to meaningful full-stack projects and make a positive impact in the field of web development.
                                </Typography>
                            </Paper>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{ delay: 0.4 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                }}
                            >
                                <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
                                    My Interests
                                </Typography>
                                <Grid container spacing={3}>
                                    {interests.map((interest, index) => (
                                        <Grid item xs={12} key={index}>
                                            <motion.div
                                                initial="hidden"
                                                animate="visible"
                                                variants={fadeInUp}
                                                transition={{ delay: 0.6 + index * 0.2 }}
                                            >
                                                <Paper
                                                    elevation={0}
                                                    sx={{
                                                        p: 3,
                                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                                        backdropFilter: 'blur(10px)',
                                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                                        transition: 'all 0.3s ease-in-out',
                                                        '&:hover': {
                                                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                                            borderColor: 'primary.main',
                                                            boxShadow: '0 0 20px rgba(144, 202, 249, 0.2)',
                                                        },
                                                    }}
                                                >
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                        <Box
                                                            sx={{
                                                                color: 'primary.main',
                                                                p: 1,
                                                                borderRadius: '50%',
                                                                backgroundColor: 'rgba(144, 202, 249, 0.1)',
                                                            }}
                                                        >
                                                            {interest.icon}
                                                        </Box>
                                                        <Box>
                                                            <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
                                                                {interest.title}
                                                            </Typography>
                                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                                {interest.description}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Paper>
                                            </motion.div>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About; 