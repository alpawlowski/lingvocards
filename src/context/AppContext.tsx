import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import DeckData from '../types/DeckData';

interface AppContextProps {
  selectedLink: string | null;
  setSelectedLink: React.Dispatch<React.SetStateAction<string | null>>;
  defaultLink: string;
  decks: DeckData | null;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const [decks, setDecks] = useState<DeckData | null>(null);
  const defaultLink = '/learn';

  useEffect(() => {
    const storedDecks = localStorage.getItem('decks');
    if (storedDecks) {
      setDecks(JSON.parse(storedDecks));
    }
  }, []);

  return (
    <AppContext.Provider value={{ selectedLink, setSelectedLink, defaultLink, decks }}>
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
