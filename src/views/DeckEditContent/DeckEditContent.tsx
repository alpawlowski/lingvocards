import React, { useState, useEffect, ChangeEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ColumnTemplate from '../../templates/ColumnTemplate/ColumnTemplate';
import { StyledWrapper, StyledSelect } from './DeckEditContent.styles';
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

const DeckEditContent: React.FC = () => {
  const { deckKey, contentIndex } = useParams<{ deckKey: string; contentIndex: string }>();
  const [deck, setDeck] = useState<DeckData | null>(null);
  const [selectedType, setSelectedType] = useState<CardType>(CardType.Flashcard);
  const [frontText, setFrontText] = useState<string>('');
  const [backText, setBackText] = useState<string>('');
  const [showLanguageSelectors, setShowLanguageSelectors] = useState<boolean>(false);
  const [frontLanguage, setFrontLanguage] = useState(defaultLanguage);
  const [backLanguage, setBackLanguage] = useState(defaultLanguage);
  const [editingContentIndex, setEditingContentIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const allDecksFromLocalStorage = localStorage.getItem('decks');
    if (allDecksFromLocalStorage) {
      const parsedDecks: Record<string, DeckData> = JSON.parse(allDecksFromLocalStorage);
      setDeck(parsedDecks[deckKey]);

      setEditingContentIndex(Number(contentIndex));

      const contentToEdit = parsedDecks[deckKey]?.content[Number(contentIndex)] || null;

      if (contentToEdit) {
        setSelectedType(contentToEdit.type.text);
        setFrontText(contentToEdit.front.text);
        setBackText(contentToEdit.back.text);
        setFrontLanguage(contentToEdit.front.language);
        setBackLanguage(contentToEdit.back.language);
      }
    }
  }, [deckKey, contentIndex]);

  const handleEditContent = () => {
    try {
      if (!deck || editingContentIndex === null || editingContentIndex < 0) {
        throw new Error('Invalid content index');
      }

      const updatedContent = [...deck.content];
      updatedContent[editingContentIndex] = {
        type: { text: selectedType },
        front: { text: frontText, language: frontLanguage },
        back: { text: backText, language: backLanguage },
      };

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
      setEditingContentIndex(null);
      navigate(`/deck-details/${deck.name}`);
    } catch (error) {
      console.error(error);
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
    <ColumnTemplate title={`Edit content to deck - ${deck?.name || ''}`} menu={menuLinks}>
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
        <Button onClick={handleEditContent}>Save changes</Button>
      </StyledWrapper>
    </ColumnTemplate>
  );
}

export default DeckEditContent;
