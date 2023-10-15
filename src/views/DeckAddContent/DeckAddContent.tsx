import React, { useState, useEffect, ChangeEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ColumnTemplate from '../../templates/ColumnTemplate/ColumnTemplate';
import { StyledWrapper, StyledSelect, StyledCheckboxLabel, StyledCheckboxInput } from './DeckAddContent.styles';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { getLanguages } from '../../utils/helpers';
import DeckData from '../../types/DeckData';
import { useAppContext } from '../../context/AppContext';

enum CardType {
  Flashcard = "flashcard",
  Qwerty = "qwerty",
}

const defaultLanguage = {
  original_name: 'English (US)',
  code: 'en-US',
  flag: '🇺🇸',
  english_name: 'English (US)',
};

const DeckAddContent: React.FC = () => {
  const { deckKey } = useParams<{ deckKey: string }>();
  const [deck, setDeck] = useState<DeckData | null>(null);
  const [selectedType, setSelectedType] = useState<CardType>(CardType.Flashcard);
  const [frontText, setFrontText] = useState<string>('');
  const [backText, setBackText] = useState<string>('');
  const [showLanguageSelectors, setShowLanguageSelectors] = useState<boolean>(false);
  const [frontLanguage, setFrontLanguage] = useState(defaultLanguage);
  const [backLanguage, setBackLanguage] = useState(defaultLanguage);
  const [deckError, setDeckError] = useState<string>('');
  const navigate = useNavigate();
  const { updateDecks } = useAppContext();

  useEffect(() => {
    const allDecksFromLocalStorage = localStorage.getItem('decks');
    if (allDecksFromLocalStorage) {
      const parsedDecks: Record<string, DeckData> = JSON.parse(allDecksFromLocalStorage);
      setDeck(parsedDecks[deckKey]);
    }
  }, [deckKey]);

  const handleCreateContent = () => {
    try {
      if (!deck) {
        throw new Error('Deck not found');
      }
  
      if (!frontText.trim() || !backText.trim()) {
        throw new Error('Front and back text cannot be empty');
      }
  
      const newContent = {
        type: {
          text: selectedType,
        },
        front: {
          text: frontText.trim(),
          language: frontLanguage,
        },
        back: {
          text: backText.trim(),
          language: backLanguage,
        },
      };      
  
      const updatedContent = [...deck.content, newContent];
  
      const updatedDeck = {
        ...deck,
        content: updatedContent,
      };
  
      const allDecksFromLocalStorage = localStorage.getItem('decks');
      const parsedDecks: Record<string, DeckData> = allDecksFromLocalStorage
        ? JSON.parse(allDecksFromLocalStorage)
        : {};
  
      parsedDecks[deckKey] = updatedDeck;
  
      localStorage.setItem('decks', JSON.stringify(parsedDecks));
      setDeck(updatedDeck);
      updateDecks(parsedDecks);
      setFrontText('');
      setBackText('');
      setFrontLanguage(defaultLanguage);
      setBackLanguage(defaultLanguage);
      setDeckError('');
      navigate(`/deck-details/${deck.name}`);
    } catch (error) {
      const errorMessage = (error as Error).message;
      setDeckError(errorMessage);
    }
  };

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
    <ColumnTemplate title={`Add content to deck - ${deck?.name || ''}`} menu={menuLinks}>
      <StyledWrapper>
        {deckError && <p className='error'>{deckError}</p>}
        <Input
          type="text"
          maxLength={255}
          placeholder="Front Text"
          value={frontText}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFrontText(e.target.value)}
        />
        {showLanguageSelectors && (
           <StyledSelect
            value={frontLanguage.code}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              const selectedLanguage = getLanguages().find(language => language.code === e.target.value);
              setFrontLanguage(selectedLanguage);
            }}
          >
            {getLanguages().map(language => (
              <option key={language.code} value={language.code}>
                {language.english_name}  {language.flag}
              </option>
            ))}
          </StyledSelect>
        )}
        <Input
          type="text"
          maxLength={255}
          placeholder="Back Text"
          value={backText}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setBackText(e.target.value)}
        />
        {showLanguageSelectors && (
          <StyledSelect
            value={backLanguage.code}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              const selectedLanguage = getLanguages().find(language => language.code === e.target.value);
              setBackLanguage(selectedLanguage);
            }}
          >
            {getLanguages().map(language => (
              <option key={language.code} value={language.code}>
                {language.english_name}  {language.flag}
              </option>
            ))}
          </StyledSelect>
        )}
        <StyledCheckboxLabel>
          <StyledCheckboxInput
            type="checkbox"
            checked={showLanguageSelectors}
            onChange={() => setShowLanguageSelectors(!showLanguageSelectors)}
          />
          Show Language Selectors
        </StyledCheckboxLabel>
        <Button onClick={handleCreateContent}>Add Content</Button>
      </StyledWrapper>
    </ColumnTemplate>
  );
}

export default DeckAddContent;
