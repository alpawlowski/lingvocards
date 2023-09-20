import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import ColumnTemplate from '../../templates/ColumnTemplate/ColumnTemplate';
import { Select } from '../../components/Select/Select';
import Button from '../../components/Button/Button';

interface Deck {
  [key: string]: {
    description?: string;
  };
}

const RemoveDeck: React.FC = () => {
  const [selectedDeck, setSelectedDeck] = useState<string>('');
  const [decks, setDecks] = useState<Deck>({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedDecks = localStorage.getItem('decks');
    const savedDecks = storedDecks ? JSON.parse(storedDecks) : {};
    setDecks(savedDecks);
  }, []);

  const handleDelete = () => {
    const updatedDecks = { ...decks };
    delete updatedDecks[selectedDeck];
    localStorage.setItem('decks', JSON.stringify(updatedDecks));
    setDecks(updatedDecks);
    setSelectedDeck('');
    navigate('/decks');
  };

  const menuLinks = [
    {
      to: `/decks`,
      name: 'Back to decks'
    }
  ];

  return (
    <ColumnTemplate title="Remove a selected deck" menu={menuLinks}>
      <Select value={selectedDeck} onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedDeck(e.target.value)}>
        <option value="">Select the deck to remove</option>
        {Object.keys(decks).map(group => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </Select>
      {selectedDeck && decks[selectedDeck] && (
        <>
          <p>
            {selectedDeck}
          </p>
          <p>
            {decks[selectedDeck].description}
          </p>
        </>
      )}
      <Button onClick={handleDelete} disabled={!selectedDeck}>Remove selected deck</Button>
    </ColumnTemplate>
  );
}

export default RemoveDeck;
