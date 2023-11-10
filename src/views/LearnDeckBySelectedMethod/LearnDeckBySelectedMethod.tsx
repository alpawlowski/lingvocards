import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ColumnTemplate from '../../templates/ColumnTemplate/ColumnTemplate';
import FlashcardLearningMethod from '../../components/FlashcardLearningMethod/FlashcardLearningMethod';
import QwertyLearningMethod from '../../components/QwertyLearningMethod/QwertyLearningMethod';
import DeckData from '../../types/DeckData';
import { useAppContext } from '../../context/AppContext';

const LearnDeckBySelectedMethod: React.FC = () => {
  const { method, deckKey } = useParams<{ method: string, deckKey: string }>();
  const { decks } = useAppContext();

  if (!deckKey) {
    return <Navigate to="/decks" />;
  }

  const deck = decks && decks[deckKey] ? decks[deckKey] : null;

  if (!deck || !deck.content || deck.content.length === 0) {
    return <Navigate to="/learn" />;
  }

  let componentToRender;

  if (method === 'flashcard') {
    componentToRender = <FlashcardLearningMethod deck={deck} />;
  } else if (method === 'qwerty') {
    componentToRender = <QwertyLearningMethod deck={deck} />;
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
  );
};

export default LearnDeckBySelectedMethod;
