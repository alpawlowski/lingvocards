import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import ColumnTemplate from '../../templates/ColumnTemplate/ColumnTemplate';
import { Select } from '../../components/Select/Select';
import Button from '../../components/Button/Button';
import Deck from '../../types/DeckData';

import { useAppContext } from '../../context/AppContext';

const RemoveDeck: React.FC = () => {
  const [selectedDeck, setSelectedDeck] = useState<string>('');
  const [decks, setDecks] = useState<Deck>({});
  const navigate = useNavigate();

  const { updateDecks } = useAppContext();

  useEffect(() => {
    const storedDecks = localStorage.getItem('decks');
    const savedDecks = storedDecks ? JSON.parse(storedDecks) : {};
    setDecks(savedDecks);
  }, []);

  const handleDelete = () => {
    const updatedDecks = { ...decks };
    delete updatedDecks[selectedDeck];
    localStorage.setItem('decks', JSON.stringify(updatedDecks));

    updateDecks(updatedDecks);
    setDecks(updatedDecks);
    setSelectedDeck('');
    navigate('/decks');
  };

  const menuLinks = [
    {
      to: `/decks`,
      name: 'Back to decks'
    },
    {
      to: `/remove-deck/all`,
      name: 'Remove all decks'
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
