import React from 'react';
import { useAppContext } from '../../context/AppContext';
import Button from '../../components/Button/Button';

interface RemoveDeckButtonProps {
  deckKey: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const RemoveDeckButton: React.FC<RemoveDeckButtonProps> = ({ deckKey, children }) => {
  const { decks, updateDecks } = useAppContext();

  const handleRemoveDeck = () => {
    const isConfirmed = window.confirm('Are you sure you want to remove this deck?');

    if (isConfirmed) {
      const updatedDecks = { ...decks };
      delete updatedDecks[deckKey];
      localStorage.setItem('decks', JSON.stringify(updatedDecks));
      updateDecks(updatedDecks);
    }
  };

  return (
    <Button icon onClick={handleRemoveDeck}>
      {children}
    </Button>
  );
};

export default RemoveDeckButton;
