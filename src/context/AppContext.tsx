import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import DeckData from '../types/DeckData';

interface Content {
  type: { text: string };
  front: { text: string; language: { [key: string]: string } };
  back: { text: string; language: { [key: string]: string } };
}

interface DeckData {
  name: string;
  description: string;
  createdDate: string;
  content: Content[];
}

interface AppContextProps {
  selectedLink: string | null;
  setSelectedLink: React.Dispatch<React.SetStateAction<string | null>>;
  defaultLink: string;
  decks: { [key: string]: DeckData } | null;
  updateDecks: (updatedDecks: Record<string, DeckData>) => void;
  updateDeckContent: (deckKey: string, updatedContent: Content[]) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const [decks, setDecks] = useState<{ [key: string]: DeckData } | null>(null);
  const defaultLink = '/learn';

  useEffect(() => {
    const storedDecks = localStorage.getItem('decks');
    if (storedDecks) {
      setDecks(JSON.parse(storedDecks));
    }
  }, []);

  const updateDecks = (updatedDecks: Record<string, DeckData>) => {
    setDecks(updatedDecks);
    localStorage.setItem('decks', JSON.stringify(updatedDecks));
  };

  const updateDeckContent = (deckKey: string, updatedContent: Content[]) => {
    if (decks) {
      const updatedDecks = { ...decks, [deckKey]: { ...decks[deckKey], content: updatedContent } };
      setDecks(updatedDecks);
      localStorage.setItem('decks', JSON.stringify(updatedDecks));
    }
  };

  return (
    <AppContext.Provider value={{ selectedLink, setSelectedLink, defaultLink, decks, updateDecks, updateDeckContent }}>
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
