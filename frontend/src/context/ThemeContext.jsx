import React, { createContext, useContext, useState, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('dark');

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: mode === 'dark' ? '#7C4DFF' : '#4527A0',
                        light: mode === 'dark' ? '#B39DDB' : '#7C4DFF',
                        dark: mode === 'dark' ? '#4527A0' : '#000051',
                    },
                    secondary: {
                        main: mode === 'dark' ? '#00E5FF' : '#0097A7',
                        light: mode === 'dark' ? '#80DEEA' : '#00E5FF',
                        dark: mode === 'dark' ? '#0097A7' : '#006064',
                    },
                    background: {
                        default: mode === 'dark' ? '#0A0A0A' : '#F5F5F5',
                        paper: mode === 'dark' ? 'rgba(20, 20, 20, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                    },
                    text: {
                        primary: mode === 'dark' ? '#FFFFFF' : '#000000',
                        secondary: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                    },
                },
                typography: {
                    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
                    h1: {
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                    },
                    h2: {
                        fontWeight: 700,
                        letterSpacing: '-0.01em',
                    },
                    h3: {
                        fontWeight: 600,
                    },
                    h4: {
                        fontWeight: 600,
                    },
                    h5: {
                        fontWeight: 600,
                    },
                    h6: {
                        fontWeight: 600,
                    },
                },
                components: {
                    MuiPaper: {
                        styleOverrides: {
                            root: {
                                backgroundImage: 'none',
                                backdropFilter: 'blur(12px)',
                                backgroundColor: mode === 'dark' ? 'rgba(20, 20, 20, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                                border: mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
                                boxShadow: mode === 'dark' ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)' : '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease-in-out',
                            },
                        },
                    },
                    MuiCard: {
                        styleOverrides: {
                            root: {
                                backgroundImage: 'none',
                                backdropFilter: 'blur(12px)',
                                backgroundColor: mode === 'dark' ? 'rgba(20, 20, 20, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                                border: mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
                                boxShadow: mode === 'dark' ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)' : '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: mode === 'dark' ? '0 12px 40px 0 rgba(0, 0, 0, 0.5)' : '0 12px 40px 0 rgba(0, 0, 0, 0.2)',
                                },
                            },
                        },
                    },
                    MuiAppBar: {
                        styleOverrides: {
                            root: {
                                backgroundImage: 'none',
                                backdropFilter: 'blur(12px)',
                                backgroundColor: mode === 'dark' ? 'rgba(20, 20, 20, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                                borderBottom: mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
                                boxShadow: mode === 'dark' ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)' : '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease-in-out',
                            },
                        },
                    },
                    MuiButton: {
                        styleOverrides: {
                            root: {
                                textTransform: 'none',
                                borderRadius: 12,
                                padding: '10px 24px',
                                transition: 'all 0.3s ease-in-out',
                            },
                            contained: {
                                background: mode === 'dark' 
                                    ? 'linear-gradient(45deg, #7C4DFF 30%, #00E5FF 90%)'
                                    : 'linear-gradient(45deg, #4527A0 30%, #0097A7 90%)',
                                boxShadow: mode === 'dark'
                                    ? '0 3px 5px 2px rgba(124, 77, 255, .3)'
                                    : '0 3px 5px 2px rgba(69, 39, 160, .3)',
                                '&:hover': {
                                    background: mode === 'dark'
                                        ? 'linear-gradient(45deg, #4527A0 30%, #0097A7 90%)'
                                        : 'linear-gradient(45deg, #000051 30%, #006064 90%)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: mode === 'dark'
                                        ? '0 6px 10px 2px rgba(124, 77, 255, .4)'
                                        : '0 6px 10px 2px rgba(69, 39, 160, .4)',
                                },
                            },
                            outlined: {
                                borderWidth: 2,
                                '&:hover': {
                                    borderWidth: 2,
                                    backgroundColor: mode === 'dark'
                                        ? 'rgba(124, 77, 255, 0.08)'
                                        : 'rgba(69, 39, 160, 0.08)',
                                    transform: 'translateY(-2px)',
                                },
                            },
                        },
                    },
                    MuiChip: {
                        styleOverrides: {
                            root: {
                                backdropFilter: 'blur(12px)',
                                backgroundColor: mode === 'dark'
                                    ? 'rgba(124, 77, 255, 0.1)'
                                    : 'rgba(69, 39, 160, 0.1)',
                                border: mode === 'dark'
                                    ? '1px solid rgba(124, 77, 255, 0.2)'
                                    : '1px solid rgba(69, 39, 160, 0.2)',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    backgroundColor: mode === 'dark'
                                        ? 'rgba(124, 77, 255, 0.2)'
                                        : 'rgba(69, 39, 160, 0.2)',
                                    transform: 'translateY(-2px)',
                                },
                            },
                        },
                    },
                },
            }),
        [mode]
    );

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <MuiThemeProvider theme={theme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
}; 