import React, { useState, useEffect, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import ColumnTemplate from '../../templates/ColumnTemplate/ColumnTemplate';
import { StyledWrapper, StyledSelect } from './DeckAddContent.styles';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { getLanguages } from '../../utils/helpers';
import DeckData from '../../types/DeckData';

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

      const newContent = {
        type: {
          text: selectedType,
        },
        front: {
          text: frontText,
          language: frontLanguage,
        },
        back: {
          text: backText,
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
      setFrontText('');
      setBackText('');
      setFrontLanguage(defaultLanguage);
      setBackLanguage(defaultLanguage);
    } catch (error) {
      console.error(error);
    }
  };

  const menuLinks = [
    {
      to: `/decks`,
      name: 'Back to decks'
    }
  ];

  return (
    <ColumnTemplate title={`Add content to deck - ${deck?.name || ''}`} menu={menuLinks}>
      <StyledWrapper>
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
        <label>
          Show Language Selectors
          <input
            type="checkbox"
            checked={showLanguageSelectors}
            onChange={() => setShowLanguageSelectors(!showLanguageSelectors)}
          />
        </label>
        <Button onClick={handleCreateContent}>Add Content</Button>
      </StyledWrapper>
    </ColumnTemplate>
  );
}

export default DeckAddContent;
