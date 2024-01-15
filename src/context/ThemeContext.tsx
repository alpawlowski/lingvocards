// ThemeContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { lightTheme, darkTheme } from '../assets/styles/theme';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

interface ThemeContextProps {
  theme: {
    name: "darkTheme" | "lightTheme",
    colors: {},
    fonts: {};
  }
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledComponentsThemeProvider theme={theme}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
};
