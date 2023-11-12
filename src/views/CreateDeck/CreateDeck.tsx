import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import ColumnTemplate from '../../templates/ColumnTemplate/ColumnTemplate';
import { useAppContext } from '../../context/AppContext';

const CreateDeck: React.FC = () => {
  const [newDeckName, setNewDeckName] = useState<string>('');
  const [newDeckDescription, setNewDeckDescription] = useState<string>(''); 
  const [deckError, setDeckError] = useState<string>('');
  const navigate = useNavigate();

  const { updateDecks } = useAppContext(); 

  const handleCreateDeck = () => {
    try {
      if (newDeckName.trim() === '') {
        throw new Error('The deck name cannot be empty');
      }
  
      const storedDecks = localStorage.getItem('decks');
      const decks = storedDecks ? JSON.parse(storedDecks) : {};
  
      if (decks[newDeckName]) {
        throw new Error('The deck name already exists');
      }

      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
  
      decks[newDeckName.trim()] = { 
        name: newDeckName.trim(), 
        description: newDeckDescription.trim(), 
        createdDate: `${year}-${month}-${day}`,
        content: []
      }; 
      localStorage.setItem('decks', JSON.stringify(decks));
      
      updateDecks(decks);
      setNewDeckName('');
      setNewDeckDescription('');
      setDeckError('');
      navigate("/decks");
    } catch (error) {
      const errorMessage = (error as Error).message;
      setDeckError(errorMessage);
    }
  };
  
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCreateDeck();
    }
  };

  const menuLinks = [
    {
      to: `/decks`,
      name: 'Back to decks',
      hideOnSmartphone: true
    },
    {
      to: '/create-deck/csv',
      name: 'Load deck from CSV file'
    }
  ];

  return (
    <ColumnTemplate title="Create a new deck" menu={menuLinks}>
      <h2>Enter a name for the new deck</h2>
      <Input
        type="text"
        maxLength={50}
        minLength={1}
        autoFocus={true}
        placeholder="Enter a name for the new deck"
        value={newDeckName}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setNewDeckName(e.target.value)}
      />
      <h2>Enter a description for the new deck</h2>
      <Input
        type="text"
        maxLength={255} 
        placeholder="Enter a description for the new deck"
        value={newDeckDescription}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setNewDeckDescription(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      {deckError && <p className='error'>{deckError}</p>}
      <Button onClick={handleCreateDeck}>Create new deck</Button>
    </ColumnTemplate>
  );
}

export default CreateDeck;
