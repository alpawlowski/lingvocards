import React, { ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import { AppProvider } from '../context/AppContext';

interface RootProvidersProps {
  children: ReactNode;
}

const RootProviders: React.FC<RootProvidersProps> = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppProvider>
          {children}
        </AppProvider>
      </ThemeProvider>
    </Router>
  );
};

export default RootProviders;
