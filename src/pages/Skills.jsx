import React from 'react';
import { Box, Container, Typography, Paper, Grid, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import DevicesIcon from '@mui/icons-material/Devices';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import Navbar from '../components/Navbar';

const Skills = () => {
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

    const skillCategories = [
        {
            icon: <CodeIcon sx={{ fontSize: 40 }} />,
            title: "Frontend Development",
            skills: [
                { name: "React", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "HTML5/CSS3", level: 90 },
                { name: "Material-UI", level: 85 },
            ]
        },
        {
            icon: <StorageIcon sx={{ fontSize: 40 }} />,
            title: "Backend Development",
            skills: [
                { name: "Node.js", level: 85 },
                { name: "Express", level: 80 },
                { name: "MongoDB", level: 75 },
                { name: "Socket.io", level: 70 },
            ]
        },
        {
            icon: <BrushIcon sx={{ fontSize: 40 }} />,
            title: "UI/UX Design",
            skills: [
                { name: "Figma", level: 80 },
                { name: "Adobe XD", level: 75 },
                { name: "Responsive Design", level: 90 },
                { name: "Wireframing", level: 85 },
            ]
        },
        {
            icon: <DevicesIcon sx={{ fontSize: 40 }} />,
            title: "Mobile Development",
            skills: [
                { name: "React Native", level: 75 },
                { name: "Mobile UI Design", level: 80 },
                { name: "Cross-platform", level: 70 },
                { name: "App Store Deployment", level: 65 },
            ]
        },
        {
            icon: <SecurityIcon sx={{ fontSize: 40 }} />,
            title: "Security & Testing",
            skills: [
                { name: "Jest", level: 80 },
                { name: "Cypress", level: 75 },
                { name: "Security Best Practices", level: 85 },
                { name: "API Testing", level: 80 },
            ]
        },
        {
            icon: <SpeedIcon sx={{ fontSize: 40 }} />,
            title: "Performance & DevOps",
            skills: [
                { name: "Git", level: 90 },
                { name: "Docker", level: 75 },
                { name: "CI/CD", level: 70 },
                { name: "Performance Optimization", level: 80 },
            ]
        }
    ];

    return (
        <Box sx={{ minHeight: '100dvh', maxWidth: '100dvw', py: 8 }}>

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
                        Skills & Expertise
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    {skillCategories.map((category, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        height: '100%',
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
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                        <Box
                                            sx={{
                                                color: 'primary.main',
                                                p: 1,
                                                borderRadius: '50%',
                                                backgroundColor: 'rgba(144, 202, 249, 0.1)',
                                            }}
                                        >
                                            {category.icon}
                                        </Box>
                                        <Typography variant="h5" sx={{ color: 'primary.main' }}>
                                            {category.title}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skillIndex}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.2 + skillIndex * 0.1 }}
                                            >
                                                <Box sx={{ mb: 2 }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                            {skill.name}
                                                        </Typography>
                                                        <Typography variant="body2" sx={{ color: 'primary.main' }}>
                                                            {skill.level}%
                                                        </Typography>
                                                    </Box>
                                                    <LinearProgress
                                                        variant="determinate"
                                                        value={skill.level}
                                                        sx={{
                                                            height: 8,
                                                            borderRadius: 4,
                                                            backgroundColor: 'rgba(144, 202, 249, 0.1)',
                                                            '& .MuiLinearProgress-bar': {
                                                                backgroundColor: 'primary.main',
                                                                borderRadius: 4,
                                                            },
                                                        }}
                                                    />
                                                </Box>
                                            </motion.div>
                                        ))}
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Skills; 