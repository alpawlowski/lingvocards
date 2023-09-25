import React, { useState, useEffect, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import ColumnTemplate from '../../templates/ColumnTemplate/ColumnTemplate';
import { StyledGrid } from './DeckAddContent.styles';
import Button from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';

interface Deck {
  name: string;
  description?: string;
  content: {
    type: string;
    front: {
      text: string;
      transcription: string;
    };
    back: {
      text: string;
      transcription: string;
    };
  }[];
}

enum CardType {
  Flashcard = "flashcard",
  Qwerty = "qwerty",
}

const DeckAddContent: React.FC = () => {
  const { deckKey } = useParams<{ deckKey: string }>();
  const [deck, setDeck] = useState<Deck | null>(null);
  const [selectedType, setSelectedType] = useState<CardType>(CardType.Flashcard);
  const [showFrontTranscription, setShowFrontTranscription] = useState<boolean>(false);
  const [showBackTranscription, setShowBackTranscription] = useState<boolean>(false);
  const [frontText, setFrontText] = useState<string>('');
  const [frontTranscription, setFrontTranscription] = useState<string>('');
  const [backText, setBackText] = useState<string>('');
  const [backTranscription, setBackTranscription] = useState<string>('');

  useEffect(() => {
    const allDecksFromLocalStorage = localStorage.getItem('decks');
    if (allDecksFromLocalStorage) {
      const parsedDecks: Record<string, Deck> = JSON.parse(allDecksFromLocalStorage);
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
          transcription: showFrontTranscription ? frontTranscription : '',
        },
        back: {
          text: backText,
          transcription: showBackTranscription ? backTranscription : '',
        },
      };

      const updatedContent = [...deck.content, newContent];

      const updatedDeck = {
        ...deck,
        content: updatedContent,
      };

      const allDecksFromLocalStorage = localStorage.getItem('decks');
      const parsedDecks: Record<string, Deck> = allDecksFromLocalStorage
        ? JSON.parse(allDecksFromLocalStorage)
        : {};

      parsedDecks[deckKey] = updatedDeck;

      localStorage.setItem('decks', JSON.stringify(parsedDecks));
      setDeck(updatedDeck);

      // Czyszczenie pól po dodaniu contentu
      setFrontText('');
      setFrontTranscription('');
      setBackText('');
      setBackTranscription('');
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
            <StyledGrid>
        <Input
          type="text"
          maxLength={255}
          placeholder="Front Text"
          value={frontText}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFrontText(e.target.value)}
        />
        <Input
          type="text"
          maxLength={255}
          placeholder="Back Text"
          value={backText}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setBackText(e.target.value)}
        />
        <label>
          Show Front Transcription
          <input
            type="checkbox"
            checked={showFrontTranscription}
            onChange={() => setShowFrontTranscription(!showFrontTranscription)}
          />
        </label>
        {showFrontTranscription && (
          <Input
            type="text"
            maxLength={255}
            placeholder="Front Transcription"
            value={frontTranscription}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFrontTranscription(e.target.value)}
          />
        )}
        <label>
          Show Back Transcription
          <input
            type="checkbox"
            checked={showBackTranscription}
            onChange={() => setShowBackTranscription(!showBackTranscription)}
          />
        </label>
        {showBackTranscription && (
          <Input
            type="text"
            maxLength={255}
            placeholder="Back Transcription"
            value={backTranscription}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setBackTranscription(e.target.value)}
          />
        )}
        <select
          value={selectedType}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedType(e.target.value as CardType)}
        >
          {Object.values(CardType).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <Button onClick={handleCreateContent}>Add Content</Button>
      </StyledGrid>
    </ColumnTemplate>
  );
}

export default DeckAddContent;
