import { Box, Typography, Button, Container, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

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
};

const buttonVariants = {
    hover: {
        scale: 1.05,
        boxShadow: '0 8px 32px rgba(124, 77, 255, 0.3)',
        transition: { duration: 0.3, ease: 'easeInOut' },
    },
    tap: {
        scale: 0.95,
    },
};

const profileVariants = {
    bounce: {
        y: [0, -15, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

const Landing = () => {
    const { mode } = useTheme();

    return (
        <>
            <Box
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100dvh',
                    minHeight: '600px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Navbar />

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                            }}
                        >
                            {/* Profile Picture */}
                            <motion.div
                                variants={itemVariants}
                                style={{
                                    position: 'relative',
                                    marginBottom: '2rem',
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: { xs: 200, md: 300 },
                                        height: { xs: 200, md: 300 },
                                        margin: '0 auto',
                                    }}
                                >
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
                                                mode === 'dark'
                                                    ? 'rgba(124, 77, 255, 0.3)'
                                                    : 'rgba(69, 39, 160, 0.3)'
                                            } 0%, transparent 70%)`,
                                            zIndex: 0,
                                        }}
                                    />
                                    <motion.div animate="bounce" variants={profileVariants}>
                                        <Avatar
                                            src="/images/non-bg2.png"
                                            alt="Kunal Gupta"
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                border: '4px solid',
                                                borderColor: 'primary.main',
                                                boxShadow:
                                                    mode === 'dark'
                                                        ? '0 0 30px rgba(124, 77, 255, 0.5)'
                                                        : '0 0 30px rgba(69, 39, 160, 0.5)',
                                                transition: 'all 0.3s ease-in-out',
                                                '&:hover': {
                                                    boxShadow:
                                                        mode === 'dark'
                                                            ? '0 0 40px rgba(124, 77, 255, 0.7)'
                                                            : '0 0 40px rgba(69, 39, 160, 0.7)',
                                                },
                                            }}
                                        />
                                    </motion.div>
                                </Box>
                            </motion.div>

                            {/* Name */}
                            <motion.div variants={itemVariants}>
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: { xs: '3rem', md: '5rem' },
                                        fontWeight: 'bold',
                                        mb: 2,
                                        background: 'linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)',
                                        backgroundClip: 'text',
                                        textFillColor: 'transparent',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        filter: 'drop-shadow(0 0 20px rgba(124, 77, 255, 0.3))',
                                    }}
                                >
                                    Kunal Gupta
                                </Typography>
                            </motion.div>

                            {/* Subtitle */}
                            <motion.div variants={itemVariants}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: 'text.secondary',
                                        mb: 4,
                                        maxWidth: '800px',
                                        textShadow: '0 0 20px rgba(124, 77, 255, 0.2)',
                                    }}
                                >
                                        'Crafting Digital Experiences Through Code'
                                </Typography>
                            </motion.div>

                            {/* Action Buttons */}
                            <motion.div variants={itemVariants}>
                                <Box sx={{ display: 'flex', gap: 2, mb: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
                                    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                                        <Button
                                            component={Link}
                                            to="/projects"
                                            variant="contained"
                                            size="large"
                                            endIcon={<ArrowForwardIcon />}
                                            sx={{
                                                background: 'linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)',
                                                boxShadow: '0 3px 5px 2px rgba(124, 77, 255, .3)',
                                            }}
                                        >
                                            Explore My Work
                                        </Button>
                                    </motion.div>
                                    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                                        <Button
                                            component={Link}
                                            to="/contact"
                                            variant="outlined"
                                            size="large"
                                            sx={{
                                                borderColor: 'primary.main',
                                                color: 'primary.main',
                                                '&:hover': {
                                                    borderColor: 'primary.main',
                                                    backgroundColor: 'rgba(124, 77, 255, 0.08)',
                                                },
                                            }}
                                        >
                                            Get in Touch
                                        </Button>
                                    </motion.div>
                                </Box>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div variants={itemVariants}>
                                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                                    <motion.div whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                                        <Button
                                            component="a"
                                            href="https://github.com/Kunal-Gupta28"
                                            target="_blank"
                                            startIcon={<GitHubIcon />}
                                            sx={{
                                                color: 'primary.main',
                                                backdropFilter: 'blur(12px)',
                                                backgroundColor: 'rgba(124, 77, 255, 0.1)',
                                                border: '1px solid rgba(124, 77, 255, 0.2)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(124, 77, 255, 0.2)',
                                                },
                                            }}
                                        >
                                            GitHub
                                        </Button>
                                    </motion.div>

                                    <motion.div whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                                        <Button
                                            component="a"
                                            href="https://www.linkedin.com/in/kunal-gupta-b7bb7a216/"
                                            target="_blank"
                                            startIcon={<LinkedInIcon />}
                                            sx={{
                                                color: 'primary.main',
                                                backdropFilter: 'blur(12px)',
                                                backgroundColor: 'rgba(124, 77, 255, 0.1)',
                                                border: '1px solid rgba(124, 77, 255, 0.2)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(124, 77, 255, 0.2)',
                                                },
                                            }}
                                        >
                                            LinkedIn
                                        </Button>
                                    </motion.div>

                                    <motion.div whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
                                        <Button
                                            component="a"
                                            href="mailto:kunal.gupta.91165@gmail.com"
                                            startIcon={<EmailIcon />}
                                            sx={{
                                                color: 'primary.main',
                                                backdropFilter: 'blur(12px)',
                                                backgroundColor: 'rgba(124, 77, 255, 0.1)',
                                                border: '1px solid rgba(124, 77, 255, 0.2)',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(124, 77, 255, 0.2)',
                                                },
                                            }}
                                        >
                                            Email
                                        </Button>
                                    </motion.div>
                                </Box>
                            </motion.div>
                        </Box>
                    </motion.div>
                </Container>
            </Box>
        </>
    );
};

export default Landing;
