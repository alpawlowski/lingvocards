import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import { InputFile, InputFileLabel } from '../../components/InputFile/InputFile';
import ColumnTemplate from '../../templates/ColumnTemplate/ColumnTemplate';
import { useAppContext } from '../../context/AppContext';
import Papa from 'papaparse';

const CreateDeckFromCSV: React.FC = () => {
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
  
      if (decks[newDeckName.trim()]) {
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

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      if (!file.type.includes('csv')) {
        alert('Please select a CSV file.');
        return;
      }

      const maxSize = 1024 * 1024;
      if (file.size > maxSize) {
        alert('Maximum file size is 1 MB.');
        return;
      }

      const data = await file.text();

      Papa.parse(data, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          try {
            const decks = JSON.parse(localStorage.getItem('decks')) || {};
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const day = String(currentDate.getDate()).padStart(2, '0');
            const data = result.data;

            const deckName = newDeckName.trim();
            const deckDescription = newDeckDescription.trim();

            if (deckName && deckDescription) {
              const chunks = [];
              for (let i = 0; i < data.length; i += 50) {
                chunks.push(data.slice(i, i + 50));
              }

              chunks.forEach((chunk, index) => {
                const deckIndex = index === 0 ? deckName : `${deckName} (${index + 1})`;

                if (!decks[deckIndex]) {
                  decks[deckIndex] = {
                    name: deckIndex,
                    description: deckDescription,
                    createdDate: `${year}-${month}-${day}`,
                    content: [],
                  };
                }

                chunk.forEach((row) => {
                  const contentItem = {
                    type: {
                      text: row.LEVEL,
                    },
                    front: {
                      text: row.FRONT,
                      language: {
                        original_name: 'Angielski',
                        code: 'en-GB',
                        flag: '🇬🇧',
                        english_name: 'English',
                      },
                    },
                    back: {
                      text: row.BACK,
                      language: {
                        original_name: 'Polski',
                        code: 'pl-PL',
                        flag: '🇵🇱',
                        english_name: 'Polish',
                      },
                    },
                  };

                  decks[deckIndex].content.push(contentItem);
                });
              });

              localStorage.setItem('decks', JSON.stringify(decks));
              updateDecks(decks);
              alert('Decks added successfully!');
            }
          } catch (error) {
            alert('An error occurred while processing the CSV file.');
          }
        }
      });
    }
  };

  const menuLinks = [
    {
      to: `/decks`,
      name: 'Back to decks'
    },
  ];

  return (
    <ColumnTemplate title="Load deck from CSV file" menu={menuLinks}>
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

        <InputFile
          type="file"
          id="file-input"
          accept=".csv"
          onChange={handleFileUpload}
        />
        <InputFileLabel htmlFor="file-input" as="label">
          Select file
        </InputFileLabel>

    </ColumnTemplate>
  );
}

export default CreateDeckFromCSV;
