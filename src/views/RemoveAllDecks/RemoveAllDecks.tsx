import React from 'react';
import { useNavigate } from 'react-router-dom';
import ColumnTemplate from '../../templates/ColumnTemplate/ColumnTemplate';
import Button from '../../components/Button/Button';

import { useAppContext } from '../../context/AppContext';

const RemoveAllDecks: React.FC = () => {
  const { updateDecks } = useAppContext();
  const navigate = useNavigate();

  const handleDeleteAll = () => {
    const confirmDelete = window.confirm("Are you sure you want to remove all decks?");
    if (confirmDelete) {
      localStorage.removeItem('decks');
      updateDecks({});
      navigate('/decks');
    }
  };

  const menuLinks = [
    {
      to: `/decks`,
      name: 'Back to decks'
    }
  ];

  return (
    <ColumnTemplate title="Remove all decks" menu={menuLinks}>
      <Button onClick={handleDeleteAll}>Remove all decks</Button>
    </ColumnTemplate>
  );
}

export default RemoveAllDecks;
