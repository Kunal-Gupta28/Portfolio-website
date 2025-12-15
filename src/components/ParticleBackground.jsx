import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const particlesRef = useRef([]);
    const animationFrameRef = useRef();

    const particles = useMemo(
        () =>
            Array.from({ length: 100 }, () => ({
                x: Math.random() * 100,
                y: Math.random() * 100,
                baseX: Math.random() * 100,
                baseY: Math.random() * 100,
                size: Math.random() * 2.5 + 0.5,
                speed: Math.random() * 1 + 0.2,
                opacity: Math.random() * 0.7 + 0.3,
            })),
        []
    );

    // Mouse tracking (RAF optimized)
    useEffect(() => {
        let rafId;

        const handleMouseMove = (e) => {
            if (rafId) return;

            rafId = requestAnimationFrame(() => {
                setMousePosition({
                    x: (e.clientX / window.innerWidth) * 100,
                    y: (e.clientY / window.innerHeight) * 100,
                });
                rafId = null;
            });
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    // Particle animation loop
    useEffect(() => {
        const updateParticles = () => {
            particlesRef.current = particles.map((particle) => {
                const dx = mousePosition.x - particle.x;
                const dy = mousePosition.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 15;

                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance;
                    return {
                        ...particle,
                        x: particle.x + dx * force * particle.speed,
                        y: particle.y + dy * force * particle.speed,
                    };
                }

                return {
                    ...particle,
                    x: particle.x + (particle.baseX - particle.x) * particle.speed,
                    y: particle.y + (particle.baseY - particle.y) * particle.speed,
                };
            });
        };

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
                inset: 0,
                zIndex: 0,
                overflow: 'hidden',
                willChange: 'transform',
                transform: 'translateZ(0)',
            }}
        >
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
                        pointerEvents: 'none',
                        willChange: 'transform',
                    }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [
                            particle.opacity,
                            particle.opacity * 1.5,
                            particle.opacity,
                        ],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </Box>
    );
};

export default ParticleBackground;
