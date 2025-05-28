import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

// GradientBackground Component
export const GradientBackground = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 50% 50%, rgba(124, 7, 255, 0.15) 0%, rgba(0, 229, 255, 0.07) 50%, transparent 100%)',
                zIndex: 0,
            }}
        />
    );
};

// ParticleBackground Component
export const ParticleBackground = () => {
    // State for tracking mouse position
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    // Refs for storing particle data and animation frame
    const particlesRef = useRef([]);
    const animationFrameRef = useRef();
    
    // Generate initial particles with optimized properties
    // Using useMemo to prevent unnecessary regeneration
    const particles = useMemo(() => 
        Array.from({ length: 500 }, () => ({
            x: Math.random() * 100,     
            y: Math.random() * 100,    
            baseX: Math.random() * 100,
            baseY: Math.random() * 100,
            size: Math.random() * 2.5 + 0.5,
            speed: Math.random() * 1 + 0.2,
            opacity: Math.random() * 0.7 + 0.3,
        })), 
    []);

    // Mouse movement tracking with requestAnimationFrame for performance
    useEffect(() => {
        let rafId;
        const handleMouseMove = (e) => {
            if (rafId) return; // Skip if animation frame is pending
            rafId = requestAnimationFrame(() => {
                // Convert mouse coordinates to percentage
                const x = (e.clientX / window.innerWidth) * 100;
                const y = (e.clientY / window.innerHeight) * 100;
                setMousePosition({ x, y });
                rafId = null;
            });
        };

        // Add event listener with passive flag for better performance
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    // Particle animation system
    useEffect(() => {
        const updateParticles = () => {
            particlesRef.current = particles.map(particle => {
                // Calculate distance from mouse to particle
                const dx = mousePosition.x - particle.x;
                const dy = mousePosition.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 15; // Magnetic effect radius
                
                // Apply magnetic effect if within radius
                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance;
                    return {
                        ...particle,
                        x: particle.x + dx * force * particle.speed,
                        y: particle.y + dy * force * particle.speed,
                    };
                }
                
                // Return to base position if outside radius
                return {
                    ...particle,
                    x: particle.x + (particle.baseX - particle.x) * particle.speed,
                    y: particle.y + (particle.baseY - particle.y) * particle.speed,
                };
            });
        };

        // Animation loop
        const animate = () => {
            updateParticles();
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animationFrameRef.current = requestAnimationFrame(animate);
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [mousePosition, particles]);

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 0,
                overflow: 'hidden',
                willChange: 'transform', // Optimize for animations
                transform: 'translateZ(0)', // Force GPU acceleration
            }}
        >
            {/* Render particles with animations */}
            {particlesRef.current.map((particle, index) => (
                <motion.div
                    key={index}
                    style={{
                        position: 'absolute',
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        background: `rgba(124, 77, 255, ${particle.opacity})`,
                        borderRadius: '50%',
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        willChange: 'transform',
                        transform: 'translateZ(0)',
                        pointerEvents: 'none', // Improve performance
                    }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </Box>
    );
};


export const BackgroundEffects = () => {
    return (
        <>
            <GradientBackground />
            <ParticleBackground />
        </>
    );
};

export default BackgroundEffects; 