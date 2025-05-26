import React from 'react';
import { Box, Container, Typography, Paper, Grid, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import DevicesIcon from '@mui/icons-material/Devices';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';

const Resume = () => {
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

    const skills = [
        {
            icon: <CodeIcon />,
            title: "Frontend Development",
            items: ["React", "JavaScript", "HTML5", "CSS3", "Material-UI", "Redux"]
        },
        {
            icon: <StorageIcon />,
            title: "Backend Development",
            items: ["Node.js", "Express", "MongoDB", "SQL", "REST APIs", "GraphQL"]
        },
        {
            icon: <BrushIcon />,
            title: "UI/UX Design",
            items: ["Figma", "Adobe XD", "Responsive Design", "Wireframing", "Prototyping"]
        },
        {
            icon: <DevicesIcon />,
            title: "Mobile Development",
            items: ["React Native", "Mobile UI Design", "Cross-platform", "App Store Deployment"]
        },
        {
            icon: <SecurityIcon />,
            title: "Security & Testing",
            items: ["Jest", "Cypress", "Security Best Practices", "API Testing"]
        },
        {
            icon: <SpeedIcon />,
            title: "Performance & DevOps",
            items: ["Git", "Docker", "CI/CD", "Performance Optimization"]
        }
    ];

    return (
        <Box sx={{ minHeight: '100vh', py: 8 }}>
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
                        Resume
                    </Typography>
                </motion.div>

                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<DownloadIcon />}
                            sx={{
                                background: 'linear-gradient(45deg, #90CAF9 30%, #64B5F6 90%)',
                                boxShadow: '0 3px 5px 2px rgba(144, 202, 249, .3)',
                            }}
                            href="/path-to-your-resume.pdf"
                            target="_blank"
                        >
                            Download Resume
                        </Button>
                    </motion.div>
                </Box>

                <Grid container spacing={4}>
                    {skills.map((skill, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeInUp}
                                transition={{ delay: 0.4 + index * 0.1 }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
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
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Box
                                            sx={{
                                                color: 'primary.main',
                                                mr: 2,
                                                p: 1,
                                                borderRadius: '50%',
                                                backgroundColor: 'rgba(144, 202, 249, 0.1)',
                                            }}
                                        >
                                            {skill.icon}
                                        </Box>
                                        <Typography variant="h6" sx={{ color: 'primary.main' }}>
                                            {skill.title}
                                        </Typography>
                                    </Box>
                                    <List>
                                        {skill.items.map((item, idx) => (
                                            <ListItem key={idx} sx={{ py: 0.5 }}>
                                                <ListItemIcon sx={{ minWidth: 36 }}>
                                                    <Box
                                                        sx={{
                                                            width: 6,
                                                            height: 6,
                                                            borderRadius: '50%',
                                                            backgroundColor: 'primary.main',
                                                        }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={item}
                                                    sx={{
                                                        '& .MuiListItemText-primary': {
                                                            color: 'text.secondary',
                                                        },
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Resume; 