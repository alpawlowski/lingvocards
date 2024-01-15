import React, { ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext';
import { GlobalStyles } from '../assets/styles/GlobalStyles';
import { AppProvider } from '../context/AppContext';

interface RootProvidersProps {
  children: ReactNode;
}

const RootProviders: React.FC<RootProvidersProps> = ({ children }) => {

  return (
    <Router>
      <ThemeProvider>
        <GlobalStyles />
        <AppProvider>
          {children}
        </AppProvider>
      </ThemeProvider>
    </Router>
  );
};

export default RootProviders;
