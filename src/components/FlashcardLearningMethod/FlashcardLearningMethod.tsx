import React, { useState  } from 'react';
import { Wrapper, FlipcardContainer, FlipcardFront, FlipcardBack, FlipcardContent, ButtonsWrapper, StyledButton } from './FlashcardLearningMethod.styles';
import Deck from '../../types/DeckData';
import ProgressBar from '../ProgressBar/ProgressBar';
import { handleTextToSpeech } from '../../utils/helpers';

interface FlashcardLearningMethodProps {
  deck: Deck;
}

const FlashcardLearningMethod: React.FC<FlashcardLearningMethodProps> = ({ deck }) => {

  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState<string>('');

  const handleFlip = () => {
    setIsFlipped((isFlipped) => !isFlipped);
  }

  const handleNext = () => {
    if (currentIndex < deck.content.length - 1) {
      setIsFlipped(false);
      setCurrentIndex(currentIndex + 1);
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setCurrentIndex(currentIndex - 1);
    }
  }

  const handleClickTextToSpeech = (text: string, language: string) => {
    const languageError = handleTextToSpeech(text, language);
    setError(languageError || '');
  
    if (languageError) {
      setTimeout(() => {
        setError('');
      }, 1000);
    }
  };

  if (!deck || !deck.content[currentIndex]) {
    return null;
  }

  return (
    <Wrapper>
      <ProgressBar totalCards={deck.content.length} currentCardIndex={currentIndex} />
      { error && <p className="error"> {error}</p> }
      <FlipcardContainer isFlipped={isFlipped} >
        <FlipcardFront>
          <FlipcardContent isVisible={!isFlipped}>
            { !error && 
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleClickTextToSpeech(deck.content[currentIndex].front.text, deck.content[currentIndex].front.language.code)}>
                <path d="M6 18V14M6 14H8L13 17V7L8 10H5C3.89543 10 3 10.8954 3 12V12C3 13.1046 3.89543 14 5 14H6ZM17 7L19 5M17 17L19 19M19 12H21" />
              </svg>
            }
            {deck.content[currentIndex].front.text}
          </FlipcardContent>
        </FlipcardFront>
        <FlipcardBack>
          <FlipcardContent isVisible={isFlipped}>
            { !error && 
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleClickTextToSpeech(deck.content[currentIndex].back.text, deck.content[currentIndex].back.language.code)}>
                <path d="M6 18V14M6 14H8L13 17V7L8 10H5C3.89543 10 3 10.8954 3 12V12C3 13.1046 3.89543 14 5 14H6ZM17 7L19 5M17 17L19 19M19 12H21" />
              </svg>
            }
            {deck.content[currentIndex].back.text}
          </FlipcardContent>
        </FlipcardBack>
      </FlipcardContainer>
      <ButtonsWrapper>
        <StyledButton onClick={handlePrev} disabled={currentIndex === 0}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 17L3 12M3 12L8 7M3 12H21" />
          </svg>
        </StyledButton>
        <StyledButton onClick={handleFlip}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5249 9.46C18.8317 10.2474 19 11.1041 19 12C19 15.866 15.866 19 12 19H9M9 19L11 17M9 19L11 21M5.47507 14.54C5.16832 13.7526 5 12.8959 5 12C5 8.13401 8.13401 5 12 5H15M15 5L13 3M15 5L13 7M14 12C14 13.1045 13.1046 14 12 14C10.8954 14 10 13.1045 10 12C10 10.8954 10.8954 9.99996 12 9.99996C13.1046 9.99996 14 10.8954 14 12Z" />
          </svg>
          <span>
            Flip Flashcard
          </span>
        </StyledButton>
        <StyledButton onClick={handleNext} disabled={currentIndex === deck.content.length - 1}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 7L21 12M21 12L16 17M21 12H3" />
          </svg>
        </StyledButton>
      </ButtonsWrapper>
    </Wrapper>
  )
}

export default FlashcardLearningMethod;
