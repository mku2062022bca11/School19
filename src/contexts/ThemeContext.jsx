import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('blue');

  const themes = {
    blue: {
      primary: 'text-blue-600',
      primaryBg: 'bg-blue-600',
      primaryBorder: 'border-blue-600',
      primaryHover: 'hover:bg-blue-700',
      accent: 'accent-blue-600',
      gradient: 'from-blue-500 to-blue-700'
    },
    green: {
      primary: 'text-green-600',
      primaryBg: 'bg-green-600',
      primaryBorder: 'border-green-600',
      primaryHover: 'hover:bg-green-700',
      accent: 'accent-green-600',
      gradient: 'from-green-500 to-green-700'
    },
    orange: {
      primary: 'text-red-600',
      primaryBg: 'bg-red-600',
      primaryBorder: 'border-red-600',
      primaryHover: 'hover:bg-red-700',
      accent: 'accent-red-600',
      gradient: 'from-red-500 to-red-700'
    },
    purple: {
      primary: 'text-purple-600',
      primaryBg: 'bg-purple-600',
      primaryBorder: 'border-purple-600',
      primaryHover: 'hover:bg-purple-700',
      accent: 'accent-purple-600',
      gradient: 'from-purple-500 to-purple-700'
    }
  };

  const value = {
    theme,
    setTheme,
    themeClasses: themes[theme]
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};