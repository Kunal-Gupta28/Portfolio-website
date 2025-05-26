import React, { useState } from 'react';
import { Box, Container, Typography, Paper, Grid, Chip, Button, TextField, InputAdornment } from '@mui/material';
import { motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import StorageIcon from '@mui/icons-material/Storage';
import DevicesIcon from '@mui/icons-material/Devices';

const Blog = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All', icon: <CodeIcon /> },
        { id: 'frontend', label: 'Frontend', icon: <BrushIcon /> },
        { id: 'backend', label: 'Backend', icon: <StorageIcon /> },
        { id: 'mobile', label: 'Mobile', icon: <DevicesIcon /> },
    ];

    const blogPosts = [
        {
            id: 1,
            title: 'Getting Started with React Hooks',
            excerpt: 'Learn how to use React Hooks to simplify your functional components and manage state effectively.',
            category: 'frontend',
            date: '2024-03-15',
            readTime: '5 min read',
            image: '/path-to-blog-image.jpg',
        },
        {
            id: 2,
            title: 'Building RESTful APIs with Node.js',
            excerpt: 'A comprehensive guide to creating scalable and maintainable REST APIs using Node.js and Express.',
            category: 'backend',
            date: '2024-03-10',
            readTime: '8 min read',
            image: '/path-to-blog-image.jpg',
        },
        {
            id: 3,
            title: 'Mobile App Development with React Native',
            excerpt: 'Explore the fundamentals of cross-platform mobile development using React Native.',
            category: 'mobile',
            date: '2024-03-05',
            readTime: '6 min read',
            image: '/path-to-blog-image.jpg',
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

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

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
                        Blog
                    </Typography>
                </motion.div>

                <Box sx={{ mb: 6 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon sx={{ color: 'primary.main' }} />
                                        </InputAdornment>
                                    ),
                                }}
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
                        <Grid item xs={12} md={6}>
                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                {categories.map((category) => (
                                    <Chip
                                        key={category.id}
                                        icon={category.icon}
                                        label={category.label}
                                        onClick={() => setSelectedCategory(category.id)}
                                        sx={{
                                            backgroundColor: selectedCategory === category.id
                                                ? 'primary.main'
                                                : 'rgba(144, 202, 249, 0.1)',
                                            color: selectedCategory === category.id
                                                ? 'white'
                                                : 'primary.main',
                                            '&:hover': {
                                                backgroundColor: selectedCategory === category.id
                                                    ? 'primary.dark'
                                                    : 'rgba(144, 202, 249, 0.2)',
                                            },
                                        }}
                                    />
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Grid container spacing={4}>
                    {filteredPosts.map((post, index) => (
                        <Grid item xs={12} md={6} key={post.id}>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
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
                                    <Box
                                        sx={{
                                            height: 200,
                                            backgroundImage: `url(${post.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    />
                                    <Box sx={{ p: 3, flexGrow: 1 }}>
                                        <Typography
                                            variant="h5"
                                            component="h2"
                                            sx={{ mb: 2, color: 'primary.main' }}
                                        >
                                            {post.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{ mb: 2, color: 'text.secondary' }}
                                        >
                                            {post.excerpt}
                                        </Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                {post.date} • {post.readTime}
                                            </Typography>
                                            <Button
                                                variant="text"
                                                sx={{ color: 'primary.main' }}
                                            >
                                                Read More
                                            </Button>
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

export default Blog; 