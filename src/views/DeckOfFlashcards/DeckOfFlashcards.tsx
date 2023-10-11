import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledLink, StyledGrid } from "./DeckOfFlashcards.styles";
import ColumnTemplate from '../../templates/ColumnTemplate/ColumnTemplate';
import { Deck, StyledHeading, StyledDescription, StyledContent, StyledDate } from '../../components/Deck/Deck';
import { useAppContext } from '../../context/AppContext'; // Dodane importowanie

const DeckOfFlashcards: React.FC = () => {
  const { decks } = useAppContext(); // Pobieranie `decks` z AppContext
  const navigate = useNavigate();

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
      { decks ? (
          <>
            <StyledGrid>
              {Object.keys(decks).map(key => {
                const deck = decks[key];
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
                      Created on: {deck.createdDate}
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
  );
}

export default DeckOfFlashcards;
