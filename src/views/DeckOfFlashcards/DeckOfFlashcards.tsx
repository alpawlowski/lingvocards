import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledLink, StyledGrid } from "./DeckOfFlashcards.styles"
import ColumnTemplate from '../../templates/ColumnTemplate/ColumnTemplate';
import { Deck, StyledHeading, StyledDescription, StyledContent, StyledDate } from '../../components/Deck/Deck';
import DeckData from '../../types/DeckData';

const DeckOfFlashcards: React.FC = () => {
  const [deckData, setDeckData] = useState<DeckData | ''>('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem('decks');

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      if (Object.keys(parsedData).length > 0) {
        setDeckData(parsedData);
      } else {
        setDeckData('');
      }
    } else {
      setDeckData('');
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
      { deckData ? (
          <>
            <StyledGrid>
              {Object.keys(deckData).map(key => {
                const deck = deckData[key];
                const contentLength = deck.content ? deck.content.length : 0;

                return (
                  <Deck key={key} onClick={() => handleDeckClick(key)}>
                    <StyledHeading>
                      {deck.name}
                    </StyledHeading>
                    <StyledDescription>
                      Description: {deck.description}
                    </StyledDescription>
                    <StyledContent>
                      Number of content: {contentLength}
                    </StyledContent>
                    <StyledDate>
                      Created: {deck.createdDate}
                    </StyledDate>
                  </Deck>
                );
              })}
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
