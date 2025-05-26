import React from 'react';
import { Box, Container, Typography, Paper, Grid, Avatar, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            position: "CEO at TechCorp",
            avatar: "/path-to-avatar-1.jpg",
            rating: 5,
            text: "Working with Kunal was an absolute pleasure. His attention to detail and technical expertise helped us deliver our project ahead of schedule. I would highly recommend him for any web development project.",
        },
        {
            id: 2,
            name: "Jane Smith",
            position: "Product Manager at InnovateX",
            avatar: "/path-to-avatar-2.jpg",
            rating: 5,
            text: "Kunal's ability to understand complex requirements and translate them into elegant solutions is remarkable. His communication skills and technical knowledge make him an invaluable asset to any team.",
        },
        {
            id: 3,
            name: "Mike Johnson",
            position: "CTO at StartupHub",
            avatar: "/path-to-avatar-3.jpg",
            rating: 5,
            text: "I've worked with many developers, but Kunal stands out for his problem-solving skills and dedication to quality. He consistently delivers exceptional results and is a pleasure to work with.",
        },
    ];

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
                        Client Testimonials
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    {testimonials.map((testimonial, index) => (
                        <Grid item xs={12} md={4} key={testimonial.id}>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeInUp}
                                transition={{ delay: index * 0.2 }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
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
                                    <FormatQuoteIcon
                                        sx={{
                                            color: 'primary.main',
                                            fontSize: 40,
                                            mb: 2,
                                            opacity: 0.5,
                                        }}
                                    />
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mb: 3,
                                            color: 'text.secondary',
                                            flexGrow: 1,
                                            fontStyle: 'italic',
                                        }}
                                    >
                                        "{testimonial.text}"
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Avatar
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            sx={{ width: 56, height: 56 }}
                                        />
                                        <Box>
                                            <Typography variant="h6" sx={{ color: 'primary.main' }}>
                                                {testimonial.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                {testimonial.position}
                                            </Typography>
                                            <Rating value={testimonial.rating} readOnly size="small" />
                                        </Box>
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

export default Testimonials; 