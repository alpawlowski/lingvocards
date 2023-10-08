import React from 'react';
import { useParams } from 'react-router-dom';
import ColumnTemplate from '../../templates/ColumnTemplate/ColumnTemplate';
import FlashcardLearningMethod from '../../components/FlashcardLearningMethod/FlashcardLearningMethod';
import QwertyLearningMethod from '../../components/QwertyLearningMethod/QwertyLearningMethod';
import DeckData from '../../types/DeckData';
import { useAppContext } from '../../context/AppContext';

interface LearnDeckBySelectedMethodProps {
  deck: DeckData;
  decks: DeckData;
  deckKey: string;
}

const LearnDeckBySelectedMethod: React.FC<LearnDeckBySelectedMethodProps> = () => {

  const { method, deckKey } = useParams<{ method: string, deckKey: string }>();
  const { decks } = useAppContext();

  if (!deckKey) {
    return <p>Brak klucza dla decku</p>;
  }

  const deck = decks && decks[deckKey] ? decks[deckKey] : null;

  let componentToRender;
  
  if (method === 'flashcard') {
    componentToRender = deck ? <FlashcardLearningMethod deck={deck} /> : <p>Deck o podanym kluczu nie istnieje.</p>;
  } else if (method === 'qwerty') {
    componentToRender = deck ? <QwertyLearningMethod deck={deck} /> : <p>Deck o podanym kluczu nie istnieje.</p>;
  } else {
    componentToRender = <p>Nieznana metoda: {method}</p>;
  }
        
  const menuLinks = deck && deck.name ? [
    {
      to: `/deck-details/${deck.name}`,
      name: `Back to deck ${deck.name} details`
    }
  ] : [
    {
      to: `/decks`,
      name: 'Back to decks'
    }
  ];

  return (
    <ColumnTemplate title={`Learning ${deck.name} using the ${method} method`} menu={menuLinks}>
      {componentToRender}
    </ColumnTemplate>
  )
}

export default LearnDeckBySelectedMethod