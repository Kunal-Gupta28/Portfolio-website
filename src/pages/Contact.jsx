import React, { useState } from 'react';
import { Box, Container, Typography, Paper, TextField, Button, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Navbar from '../components/Navbar'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

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

    return (
        <Box sx={{ py: 8 }}>
            {/* navbar */}
            <Navbar />

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
                            mb: 4,
                            fontWeight: 'bold',
                            background: 'linear-gradient(45deg, #90CAF9 30%, #64B5F6 90%)',
                            backgroundClip: 'text',
                            textFillColor: 'transparent',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Contact Me
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
                                <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
                                    Get in Touch
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                                    Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <LocationOnIcon sx={{ color: 'primary.main' }} />
                                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                            dwarka mor, New Delhi:- 110043, India
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <EmailIcon sx={{ color: 'primary.main' }} />
                                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                            kunal.gupta.91165@gmail.com
                                        </Typography>
                                    </Box>

                                    {/* git linkrdin and whatapp icon */}
                                    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>

                                        {/* github icon */}
                                        <IconButton
                                            href="https://github.com/Kunal-Gupta28"
                                            target="_blank"
                                            sx={{
                                                color: 'primary.main',
                                                '&:hover': { color: 'primary.light' }
                                            }}
                                        >
                                            <GitHubIcon />
                                        </IconButton>

                                        {/* linkedin icon */}
                                        <IconButton
                                            href="https://www.linkedin.com/in/kunal-gupta-b7bb7a216/"
                                            target="_blank"
                                            sx={{
                                                color: 'primary.main',
                                                '&:hover': { color: 'primary.light' }
                                            }}
                                        >
                                            <LinkedInIcon />
                                        </IconButton>

                                        {/* what's app icon */}
                                        <IconButton
                                            href="https://wa.me/9818479466"
                                            target="_blank"
                                            sx={{
                                                color: 'primary.main',
                                                '&:hover': { color: 'primary.light' }
                                            }}
                                        >
                                            <WhatsAppIcon />
                                        </IconButton>
                                    </Box>
                                </Box>
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
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                }}
                            >
                                <Typography variant="h5" sx={{ mb: 3, color: 'primary.main' }}>
                                    Send Message
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        color: 'text.secondary',
                                                        '& fieldset': {
                                                            borderColor: 'rgba(255, 255, 255, 0.1)',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: 'primary.main',
                                                        },
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        color: 'text.secondary',
                                                        '& fieldset': {
                                                            borderColor: 'rgba(255, 255, 255, 0.1)',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: 'primary.main',
                                                        },
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        color: 'text.secondary',
                                                        '& fieldset': {
                                                            borderColor: 'rgba(255, 255, 255, 0.1)',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: 'primary.main',
                                                        },
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Message"
                                                name="message"
                                                multiline
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        color: 'text.secondary',
                                                        '& fieldset': {
                                                            borderColor: 'rgba(255, 255, 255, 0.1)',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: 'primary.main',
                                                        },
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="large"
                                                fullWidth
                                                sx={{
                                                    mt: 2,
                                                    background: 'linear-gradient(45deg, #90CAF9 30%, #64B5F6 90%)',
                                                    boxShadow: '0 3px 5px 2px rgba(144, 202, 249, .3)',
                                                }}
                                            >
                                                Send Message
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact; 