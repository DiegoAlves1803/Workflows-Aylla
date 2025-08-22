import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Verifica localStorage ou preferência do sistema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      // Tema Claro
      light: {
        primary: '#08215D',
        secondary: '#07C9FD',
        background: 'linear-gradient(135deg, #F6F9FF 0%, #FFFFFF 100%)',
        cardBg: 'rgba(255, 255, 255, 0.9)',
        sidebarBg: 'rgba(255, 255, 255, 0.95)',
        text: {
          primary: '#0F172A',
          secondary: '#334155',
          tertiary: '#64748B'
        },
        border: '#CBD5E1',
        accent: '#F1F5F9',
        shadow: '0px 8px 24px rgba(12, 12, 13, 0.06)'
      },
      // Tema Escuro
      dark: {
        primary: '#07C9FD',
        secondary: '#08215D',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        cardBg: 'rgba(30, 41, 59, 0.9)',
        sidebarBg: 'rgba(15, 23, 42, 0.95)',
        text: {
          primary: '#F8FAFC',
          secondary: '#E2E8F0',
          tertiary: '#94A3B8'
        },
        border: '#374151',
        accent: '#1E293B',
        shadow: '0px 8px 24px rgba(0, 0, 0, 0.3)'
      }
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;