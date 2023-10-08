import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledLink, StyledGrid } from "./LearnSelectedDeck.styles"
import ColumnTemplate from '../../templates/ColumnTemplate/ColumnTemplate';
import Input from '../../components/Input/Input';
import DeckData from '../../types/DeckData';

const LearnDeck: React.FC = () => {
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
    navigate(`/learn/${deckKey}`);
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
                  <Input></Input>
                );
              })}
            </StyledGrid>
          </>
        ) : (
          <>
            <h2>There is no flashcards to learn in this deck</h2>
            <StyledLink to='/learn'>
              Learn other deck
            </StyledLink>
          </>
        )}
    </ColumnTemplate>
  )
}

export default LearnDeck;
