import React from 'react';
import { StyledLink, StyledGrid } from "./DeckOfFlashcards.styles";
import ColumnTemplate from '../../templates/ColumnTemplate/ColumnTemplate';
import { Deck, StyledHeading, StyledDescription, StyledContent, StyledFooter, StyledDate, StyledOptions } from '../../components/Deck/Deck';
import { useAppContext } from '../../context/AppContext';
import RemoveDeckButton from '../../components/RemoveDeckButton/RemoveDeckButton';
import Button from '../../components/Button/Button';

const DeckOfFlashcards: React.FC = () => {
  const { decks } = useAppContext();

  const menuLinks = [
    {
      to: '/create-deck',
      name: 'Create new deck'
    }
  ];
  
  return (
    <ColumnTemplate title="Decks of flashcards" menu={menuLinks}>
    { decks && Object.keys(decks).length > 0 ? (
          <>
            <StyledGrid>
              {Object.keys(decks).map(key => {
                const deck = decks[key];
                const contentLength = deck.content ? deck.content.length : 0;

                return (
                  <Deck key={key}>
                    <StyledHeading to={`/deck-details/${key}`} >
                      {deck.name}
                    </StyledHeading>
                    <StyledDescription>
                      Description: {deck.description}
                    </StyledDescription>
                    <StyledContent>
                      Number of flashcards: {contentLength}
                    </StyledContent>
                    <StyledFooter>
                      <StyledDate>
                        Created on: {deck.createdDate}
                      </StyledDate>
                      <StyledOptions>
                        <Button icon>
                          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M9 15V12.5L17.75 3.75C18.4404 3.05964 19.5596 3.05964 20.25 3.75V3.75C20.9404 4.44036 20.9404 5.55964 20.25 6.25L15.5 11L11.5 15H9Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </Button>
                        <RemoveDeckButton key={key} deckKey={key}>
                          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </RemoveDeckButton>
                      </StyledOptions>
                    </StyledFooter>
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
