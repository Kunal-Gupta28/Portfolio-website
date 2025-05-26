import React, { useState } from 'react'
import { Container, Typography, Box, Paper, Grid, Chip, IconButton, Collapse } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Qualifications = () => {
    const [expandedEducation, setExpandedEducation] = useState({})
    const [expandedExperience, setExpandedExperience] = useState({})

    const education = [
        {
            degree: 'Bachelor of Technology in Computer Science',
            institution: 'University Name',
            duration: '2018 - 2022',
            description: 'Graduated with honors. Specialized in Software Engineering and Data Structures.',
            achievements: [
                'Dean\'s List for Academic Excellence',
                'First Prize in University Hackathon',
                'Led Technical Club as President',
                'Published Research Paper in IEEE',
            ],
            gpa: '3.8/4.0',
        },
        {
            degree: 'High School Diploma',
            institution: 'School Name',
            duration: '2016 - 2018',
            description: 'Completed with distinction in Mathematics and Computer Science.',
            achievements: [
                'Top 5% in National Science Olympiad',
                'School Science Exhibition Winner',
                'Mathematics Club Leader',
            ],
            gpa: '4.0/4.0',
        },
    ];

    const experience = [
        {
            position: 'Senior Software Engineer',
            company: 'Tech Company',
            duration: '2022 - Present',
            description: 'Leading development of enterprise-level applications. Mentoring junior developers and implementing best practices.',
            responsibilities: [
                'Led a team of 5 developers in building a microservices architecture',
                'Implemented CI/CD pipelines reducing deployment time by 60%',
                'Mentored junior developers and conducted code reviews',
                'Optimized database queries improving performance by 40%',
            ],
            technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'AWS'],
        },
        {
            position: 'Software Engineer',
            company: 'Previous Company',
            duration: '2020 - 2022',
            description: 'Developed and maintained web applications. Collaborated with cross-functional teams to deliver high-quality solutions.',
            responsibilities: [
                'Developed and maintained 3 major web applications',
                'Implemented automated testing increasing coverage to 85%',
                'Collaborated with UX team to improve user experience',
                'Reduced bug reports by 30% through better code quality',
            ],
            technologies: ['JavaScript', 'React', 'Express', 'PostgreSQL'],
        },
    ];

    const handleEducationExpand = (index) => {
        setExpandedEducation((prev) => ({
            ...prev,
            [index]: !prev[index],
        }))
    }

    const handleExperienceExpand = (index) => {
        setExpandedExperience((prev) => ({
            ...prev,
            [index]: !prev[index],
        }))
    }

    return (
        <Box sx={{ minHeight: '100vh', py: 8 }}>
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
                                <Timeline>
                                    {education.map((edu, index) => (
                                        <TimelineItem key={index}>
                                            <TimelineSeparator>
                                                <TimelineDot sx={{ bgcolor: 'primary.main' }} />
                                                {index < education.length - 1 && <TimelineConnector />}
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'flex-start',
                                                        mb: 1,
                                                    }}
                                                >
                                                    <Typography variant="h6" sx={{ color: 'primary.main' }}>
                                                        {edu.degree}
                                                    </Typography>
                                                    <IconButton
                                                        onClick={() => handleEducationExpand(index)}
                                                        sx={{ color: 'primary.main' }}
                                                    >
                                                        {expandedEducation[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                                    </IconButton>
                                                </Box>
                                                <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                                                    {edu.institution}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                                                    {edu.duration} • GPA: {edu.gpa}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                    {edu.description}
                                                </Typography>
                                                <Collapse in={expandedEducation[index]}>
                                                    <Box sx={{ mt: 2, pl: 2 }}>
                                                        {edu.achievements.map((achievement, idx) => (
                                                            <Box
                                                                key={idx}
                                                                sx={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: 1,
                                                                    mb: 1,
                                                                }}
                                                            >
                                                                <StarIcon sx={{ color: 'primary.main', fontSize: 16 }} />
                                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                                    {achievement}
                                                                </Typography>
                                                            </Box>
                                                        ))}
                                                    </Box>
                                                </Collapse>
                                            </TimelineContent>
                                        </TimelineItem>
                                    ))}
                                </Timeline>
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
                                <Timeline>
                                    {experience.map((exp, index) => (
                                        <TimelineItem key={index}>
                                            <TimelineSeparator>
                                                <TimelineDot sx={{ bgcolor: 'primary.main' }} />
                                                {index < experience.length - 1 && <TimelineConnector />}
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'flex-start',
                                                        mb: 1,
                                                    }}
                                                >
                                                    <Typography variant="h6" sx={{ color: 'primary.main' }}>
                                                        {exp.position}
                                                    </Typography>
                                                    <IconButton
                                                        onClick={() => handleExperienceExpand(index)}
                                                        sx={{ color: 'primary.main' }}
                                                    >
                                                        {expandedExperience[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                                    </IconButton>
                                                </Box>
                                                <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                                                    {exp.company}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                                                    {exp.duration}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                    {exp.description}
                                                </Typography>
                                                <Collapse in={expandedExperience[index]}>
                                                    <Box sx={{ mt: 2 }}>
                                                        <Typography variant="subtitle2" sx={{ color: 'primary.main', mb: 1 }}>
                                                            Key Responsibilities:
                                                        </Typography>
                                                        {exp.responsibilities.map((responsibility, idx) => (
                                                            <Box
                                                                key={idx}
                                                                sx={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: 1,
                                                                    mb: 1,
                                                                }}
                                                            >
                                                                <EmojiEventsIcon sx={{ color: 'primary.main', fontSize: 16 }} />
                                                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                                    {responsibility}
                                                                </Typography>
                                                            </Box>
                                                        ))}
                                                        <Box sx={{ mt: 2 }}>
                                                            <Typography variant="subtitle2" sx={{ color: 'primary.main', mb: 1 }}>
                                                                Technologies:
                                                            </Typography>
                                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                                {exp.technologies.map((tech, idx) => (
                                                                    <Chip
                                                                        key={idx}
                                                                        label={tech}
                                                                        size="small"
                                                                        sx={{
                                                                            backgroundColor: 'rgba(144, 202, 249, 0.1)',
                                                                            color: 'primary.main',
                                                                        }}
                                                                    />
                                                                ))}
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Collapse>
                                            </TimelineContent>
                                        </TimelineItem>
                                    ))}
                                </Timeline>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Qualifications; 