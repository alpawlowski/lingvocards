import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledLink, StyledGrid } from "./DeckOfFlashcards.styles"
import ColumnTemplate from '../../templates/ColumnTemplate/ColumnTemplate';
import { Deck, StyledHeading } from '../../components/Deck/Deck';

interface UserData {
  [key: string]: {
    description?: string;
  };
}

const DeckOfFlashcards: React.FC = () => {
  const [userData, setUserData] = useState<UserData | ''>('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem('decks');

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      if (Object.keys(parsedData).length > 0) {
        setUserData(parsedData);
      } else {
        setUserData('');
      }
    } else {
      setUserData('');
    }
  }, []);

  const handleDeckClick = (deckKey: string) => {
    navigate(`/deck-details/${deckKey}`);
  };

  const menuLinks = [
    {
      to: '/create-deck',
      name: 'Create new deck'
    },
    {
      to: '/remove-deck',
      name: 'Remove selected deck'
    }
  ];
  
  return (
    <ColumnTemplate title="Decks of flashcards" menu={menuLinks}>
      { userData ? (
          <>
            <StyledGrid>
              {Object.keys(userData).map(key => (
                  <Deck key={key} onClick={() => handleDeckClick(key)}>
                    <StyledHeading>
                      {key}
                    </StyledHeading>
                    {userData[key].description ? (
                      <p>{userData[key].description}</p>
                    ) : (
                      <p>No description</p>
                    )}
                  </Deck>
                ))}
            </StyledGrid>
          </>
        ) : (
          <>
            <h2>No flashcard deck in your pack</h2>
            <StyledLink to='/create-deck'>
              Create a new deck
            </StyledLink>
          </>
        )}
    </ColumnTemplate>
  )
}

export default DeckOfFlashcards;
