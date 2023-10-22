import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ColumnTemplate from '../../templates/ColumnTemplate/ColumnTemplate';
import Table from '../../components/Table/Table';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import { StyledRow } from './DeckDetails.styles'

import Deck from '../../types/Deck';
import { useAppContext } from '../../context/AppContext';

const DeckDetails: React.FC = () => {
  const navigate = useNavigate();
  const { deckKey } = useParams<{ deckKey: string }>();
  const { decks } = useAppContext();
  const [deck, setDeck] = useState<Deck | null>(null);
  const { selectedLink, setSelectedLink } = useAppContext();

  useEffect(() => {
    if (decks && decks[deckKey]) {
      const currentDeck = decks[deckKey];
      setDeck(currentDeck);
    } else {
      if (!deck) {
        navigate(`/deck-details/${deckKey}`);
      }
    }
  }, [deckKey, navigate, decks, deck]);

  const menuLinks = deck && deck.name ? [
    {
      to: `/decks`,
      name: 'Back to decks'
    },
    {
      to: `/${deck.name}/add`,
      name: `Add content to deck ${deck.name}`
    }
  ] : [
    {
      to: `/decks`,
      name: 'Back to decks'
    }
  ];

  const title = deck && deck.name ? `Details of deck - ${deck.name}` : 'Deck Not Found';

  return (
    <ColumnTemplate title={title} menu={menuLinks}>
      {deck && deck.name ? (
        <>
          <p>Description: {deck.description || "No description available"}</p>
          {deck.createdDate && <p>Created on: {deck.createdDate}</p>}
          <StyledRow>
            <ButtonLink 
              to={`/learn/${deck.name}/qwerty`} 
              onClick={() => setSelectedLink(`learn/${deck.name}/qwerty`)}
              disabled={deck.content.length === 0}
            >
              Learn using the QWERTY method
            </ButtonLink>
            <ButtonLink 
              to={`/learn/${deck.name}/flashcard`} 
              onClick={() => setSelectedLink(`learn/${deck.name}/flashcard`)}
              disabled={deck.content.length === 0}
            >
              Learn using the FLASHCARDS method
            </ButtonLink>
          </StyledRow>

          <Table
            data={deck.content}
            deckName={deck.name}
            dataToShow={['type', 'front', 'back']}
          />
          { (deck.content.length === 0) 
          &&
            <ButtonLink to={`/${deck.name}/add`}>
              Add content to deck {deck.name}
            </ButtonLink>
          }
        </>
      ) : (
        <p>{title}</p>
      )}
    </ColumnTemplate>
  );
}

export default DeckDetails;
