import React from 'react'
import { Container, Typography, Box, Paper, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Navbar from '../components/Navbar'

const Qualifications = () => {
    // education details
    const education = [
        {
            degree: 'Bachelor of Technology in Computer Science & Electronics and Communication',
            institution: 'DTU - Delhi Technological University',
            duration: '2022 - 2026',
            description: 'Currently pursuing. Specialized in Electronics, Communication Systems, and Computer Science.',
        },
        {
            degree: 'Diploma in Chemical Engineering',
            institution: 'Guru nanak dev institute of technology',
            duration: '2019 - 2022',
            description: 'Completed with distinction in Chemical Process Technology and Industrial Chemistry.',
            gpa: '4.0/4.0',
        },
    ];

    // experience details
    const experience = [
        {
            position: 'Self-Study & Independent Learning',
            company: 'Personal Development',
            duration: '2023 - Present',
            description: 'Actively learning and building projects across various domains including web development, mobile apps, AI/ML, and cybersecurity. Focused on practical implementation and continuous learning.',
            responsibilities: [
                'Learning and implementing full-stack development with MERN stack',
                'Exploring mobile app development and cross-platform solutions',
                'Studying AI/ML concepts and their practical applications',
                'Practicing cybersecurity and ethical hacking concepts',
                'Building personal projects to apply learned technologies',
                'Contributing to open-source projects and learning from the community'
            ],
            technologies: [
                // Frontend Technologies
                'HTML5',
                'CSS3',
                'JavaScript',
                'React.js',
                'Material-UI',
                'Tailwind CSS',
                'Redux',
                'Framer Motion',

                // Backend Technologies
                'Node.js',
                'Express.js',
                'MongoDB',
                'Socket.io',
                'JWT',
                'REST APIs',

                // Development Tools
                'VS Code',
                'Git',
                'GitHub',
                'Postman',
                'npm',
                'yarn',
                'Docker',
                'Linux',
            ],
        }
    ];

    return (
        <Box sx={{ minHeight: '100dvh', py: 8 }}>
            <Navbar/>
            
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
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
                        Qualifications
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    {/* Education Section */}
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{ mb: 3, color: 'primary.main', display: 'flex', alignItems: 'center', gap: 1 }}
                                >
                                    <SchoolIcon /> Education
                                </Typography>
                                
                                    {education.map((edu, index) => (
                                    <Box
                                        key={index}
                                                    sx={{
                                            mb: 3,
                                            p: 2,
                                            borderRadius: 2,
                                            backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                            border: '1px solid rgba(255, 255, 255, 0.05)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                                borderColor: 'primary.main',
                                            }
                                                    }}
                                                >
                                        <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
                                                        {edu.degree}
                                                    </Typography>
                                        
                                        <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 1 }}>
                                                    {edu.institution}
                                                </Typography>
                                        
                                                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                                            {edu.duration} {edu.gpa ? `• GPA: ${edu.gpa}` : ''}
                                                </Typography>
                                        
                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                    {edu.description}
                                                                </Typography>
                                                            </Box>
                                                        ))}
                            </Paper>
                        </motion.div>
                    </Grid>

                    {/* Experience Section */}
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{ mb: 3, color: 'primary.main', display: 'flex', alignItems: 'center', gap: 1 }}
                                >
                                    <WorkIcon /> Experience
                                </Typography>
                                
                                    {experience.map((exp, index) => (
                                    <Box
                                        key={index}
                                                    sx={{
                                            mb: 3,
                                            p: 2,
                                            borderRadius: 2,
                                            backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                            border: '1px solid rgba(255, 255, 255, 0.05)',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                                borderColor: 'primary.main',
                                            }
                                                    }}
                                                >
                                        <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
                                                        {exp.position}
                                                    </Typography>
                                        
                                        <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 1 }}>
                                                    {exp.company}
                                                </Typography>
                                        
                                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                                                    {exp.duration}
                                                </Typography>
                                        
                                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                                                    {exp.description}
                                                </Typography>
                                        
                                                        <Typography variant="subtitle2" sx={{ color: 'primary.main', mb: 1 }}>
                                                            Key Responsibilities:
                                                        </Typography>
                                        
                                                        {exp.responsibilities.map((responsibility, idx) => (
                                            <Typography 
                                                key={idx}
                                                variant="body2" 
                                                sx={{ 
                                                    color: 'text.secondary',
                                                    mb: 1,
                                                    pl: 2,
                                                    position: 'relative',
                                                    '&::before': {
                                                        content: '"•"',
                                                        position: 'absolute',
                                                        left: 0,
                                                        color: 'primary.main'
                                                    }
                                                }}
                                            >
                                                {responsibility}
                                            </Typography>
                                        ))}
                                        
                                        <Box sx={{ mt: 3 }}>
                                            <Typography variant="subtitle2" sx={{ 
                                                color: 'primary.main', 
                                                mb: 2,
                                                fontWeight: 600,
                                                fontSize: '1.1rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1,
                                                '&::after': {
                                                    content: '""',
                                                    flex: 1,
                                                    height: '1px',
                                                    background: 'linear-gradient(90deg, rgba(144, 202, 249, 0.3), transparent)'
                                                }
                                            }}>
                                                Technologies
                                            </Typography>
                                            
                                            <Box sx={{ 
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                                                gap: 1.5,
                                                p: 2,
                                                borderRadius: '12px',
                                                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                                border: '1px solid rgba(255, 255, 255, 0.05)'
                                            }}>
                                                {exp.technologies.map((tech, idx) => (
                                                            <Box
                                                                key={idx}
                                                                sx={{
                                                                    p: 1.5,
                                                                    borderRadius: '8px',
                                                                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                                                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    transition: 'all 0.3s ease',
                                                                    cursor: 'pointer',
                                                                    '&:hover': {
                                                                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                                                        transform: 'translateY(-2px)',
                                                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                                                        borderColor: 'primary.main'
                                                                    }
                                                                }}
                                                            >
                                                                <Typography
                                                                    variant="body2"
                                                                    sx={{
                                                                        color: 'text.secondary',
                                                                        fontWeight: 500,
                                                                        textAlign: 'center',
                                                                        fontSize: '0.9rem'
                                                                    }}
                                                                >
                                                                    {tech}
                                                                </Typography>
                                                            </Box>
                                                                ))}
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                    ))}
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Qualifications; 