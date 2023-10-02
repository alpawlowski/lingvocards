import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
  selectedLink: string | null;
  setSelectedLink: React.Dispatch<React.SetStateAction<string | null>>;
  defaultLink: string;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);

  const defaultLink = '/learn';

  return (
    <AppContext.Provider value={{ selectedLink, setSelectedLink, defaultLink }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
