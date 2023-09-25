import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ColumnTemplate from '../../templates/ColumnTemplate/ColumnTemplate';
import Table from '../../components/Table/Table';

interface Deck {
  name: string;
  description?: string;
  content: { [key: string]: { text: string } }[];
  createdDate?: string;
}

const DeckDetails: React.FC = () => {
  const navigate = useNavigate();
  const { deckKey } = useParams<{ deckKey: string }>();
  const [deck, setDeck] = useState<Deck | null>(null);

  useEffect(() => {
    const allDecksFromLocalStorage = localStorage.getItem('decks');
    if (allDecksFromLocalStorage) {
      const parsedDecks: Record<string, Deck> = JSON.parse(allDecksFromLocalStorage);
      if (parsedDecks && parsedDecks[deckKey as keyof typeof parsedDecks]) {
        const currentDeck = parsedDecks[deckKey as keyof typeof parsedDecks];
        const contentArray = currentDeck.content || [];
        setDeck({ ...currentDeck, content: contentArray });
      } else {
        navigate('/decks');
      }
    }
  }, [deckKey, navigate]);
  
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

          <Table
            data={deck.content}
            dataToShow={['type', 'front', 'back']}
          />

        </>
      ) : (
        <p>{title}</p>
      )}
    </ColumnTemplate>
  );
}

export default DeckDetails;
