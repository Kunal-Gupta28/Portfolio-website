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

    const interests = [
        {
            icon: <CodeIcon sx={{ fontSize: 40 }} />,
            title: "Web Development",
            description: "Passionate about creating modern, responsive web applications using React and Material-UI. Currently focusing on mastering full-stack development."
        },
        {
            icon: <BrushIcon sx={{ fontSize: 40 }} />,
            title: "UI/UX Design",
            description: "Love crafting beautiful and intuitive user interfaces. Always exploring new design trends and best practices to create better user experiences."
        },
        {
            icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
            title: "Problem Solving",
            description: "Enjoy tackling complex problems and finding efficient solutions. Constantly learning new technologies and approaches to improve my skills."
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
                                </Box>
                                <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
                                    My Journey
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                                    Hello! I'm <b className='text-white'>Kunal Gupta</b>, a passionate <b className='text-white'>Computer Science & Electronics student</b> at DTU, 
                                    currently in my final year. My journey in technology began with a diploma in Chemical Engineering, 
                                    which gave me a strong foundation in problem-solving and analytical thinking.
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                                    I'm currently focused on <b className='text-white'>web development</b>, particularly in building modern, 
                                    responsive applications using React and Material-UI. My project, the Kuber Ride Booking App, 
                                    showcases my ability to create user-friendly interfaces and implement complex features.
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    As a <b className='text-white'>fresher in the tech industry</b>, I'm eager to learn and grow. I'm constantly 
                                    exploring new technologies and best practices, and I'm excited about the opportunity to 
                                    contribute to meaningful projects and make a positive impact in the field of web development.
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