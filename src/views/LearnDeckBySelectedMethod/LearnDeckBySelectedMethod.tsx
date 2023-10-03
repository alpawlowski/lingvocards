import React from 'react';
import { useParams } from 'react-router-dom';
import ColumnTemplate from '../../templates/ColumnTemplate/ColumnTemplate';
import AllLearningMethods from '../../components/AllLearningMethods/AllLearningMethods';
import FlashcardLearningMethod from '../../components/FlashcardLearningMethod/FlashcardLearningMethod';
import QwertyLearningMethod from '../../components/QwertyLearningMethod/QwertyLearningMethod';
import DeckData from '../../types/DeckData';
import { useAppContext } from '../../context/AppContext';

interface LearnDeckBySelectedMethodProps {
  deckData: DeckData;
  deckKey: string;
}

const LearnDeckBySelectedMethod: React.FC<LearnDeckBySelectedMethodProps> = () => {

  const { method, deckKey } = useParams<{ method: string, deckKey: string }>();
  const { decks } = useAppContext();
  let componentToRender;
  
  if (method === 'flashcard') {
    componentToRender = <FlashcardLearningMethod deckData={decks} deckKey={deckKey} />;
  } else if (method === 'qwerty') {
    componentToRender = <QwertyLearningMethod deckData={decks} deckKey={deckKey} />;
  } else if (method === 'all') {
    componentToRender = <AllLearningMethods deckData={decks} deckKey={deckKey} />;
  } else {
    componentToRender = <p>Nieznana metoda: {method}</p>;
  }
        
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
    <ColumnTemplate title={`Seleted method - ${method}`} menu={menuLinks}>
      metoda: {method}
      {componentToRender}
    </ColumnTemplate>
  )
}

export default LearnDeckBySelectedMethod