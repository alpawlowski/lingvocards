import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ColumnTemplate from '../../templates/ColumnTemplate/ColumnTemplate';

interface Deck {
  name: string;
  description?: string;
}

const DeckAddContent: React.FC = () => {

  const { deckKey } = useParams<{ deckKey: string }>();
  const [deck, setDeck] = useState<Deck | null>(null);
  
  useEffect(() => {
    const allDecksFromLocalStorage = localStorage.getItem('decks');
    if (allDecksFromLocalStorage) {
      const parsedDecks: Record<string, Deck> = JSON.parse(allDecksFromLocalStorage);
      setDeck(parsedDecks[deckKey as keyof typeof parsedDecks]);
    }
  }, [deckKey]);

  const menuLinks = deck && deck.name ? [
    {
      to: `/deck-details/${deck.name}`,
      name: `Back to deck ${deck.name}`
    }
  ] : [
    {
      to: `/decks`,
      name: 'Back to decks'
    }
  ];

  const title = deck ? `Add content to deck - ${deck.name}` : 'Deck Not Found';

  return (
    <ColumnTemplate title={title} menu={menuLinks}>
      {deck ? (
        <>
          <h2>Name: {deck.name}</h2>
          <p>Description: {deck.description || "No description available"}</p>
        </>
      ) : (
        <p>{title}</p>
      )}
    </ColumnTemplate>
  );
}

export default DeckAddContent;
