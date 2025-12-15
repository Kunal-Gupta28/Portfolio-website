import React from 'react';
import { Box } from '@mui/material';

const GradientBackground = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                inset: 0,
                pointerEvents: "none",
                background:
                    'radial-gradient(circle at 50% 50%, rgba(124, 7, 255, 0.15) 0%, rgba(0, 229, 255, 0.07) 50%, transparent 100%)',
                zIndex: 0,
            }}
        />
    );
};

export default GradientBackground;
