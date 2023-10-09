import React, { useState, useEffect, useRef, KeyboardEvent, ChangeEvent} from 'react';
import { Wrapper, QwertyContainer, QwertyContent, StyledInput, ButtonsWrapper, StyledButton } from './QwertyLearningMethod.styles';
import DeckData from '../../types/DeckData';
import ProgressBar from '../ProgressBar/ProgressBar';

interface QwertyLearningMethodProps {
  deck: DeckData;
}

const QwertyLearningMethod: React.FC<QwertyLearningMethodProps> = ({ deck }) => {

  const [enteredAnswer, setEnteredAnswer] = useState<string>('');
  const [infoMessage, setInfoMessage] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const inputRef = useRef(null);

  const handleCheck = () => {
    let correctAnswer = deck.content[currentIndex].back.text;
    let answer = enteredAnswer.toLowerCase();

    if (answer === correctAnswer.toLowerCase()) {
      setInfoMessage('Correct answer')
      setIsCorrect(true);
    } else {
      setInfoMessage('Wrong answer')
      setIsCorrect(false);
      inputRef.current.classList.add('wrong');
    }
    
    setTimeout(() => {
      setInfoMessage('');
    }, 2000);
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCheck();
    }
  };

  const resetInputStyles = () => {
    if (inputRef.current) {
      inputRef.current.classList.remove('wrong');
    }
  }

  useEffect(() => {
    handleCheck();
    resetInputStyles();
  }, [enteredAnswer]);


  const handleNext = () => {
    if (currentIndex < deck.content.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsCorrect(false);
      setEnteredAnswer('');
      resetInputStyles();
    }

  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsCorrect(false);
      setEnteredAnswer('');
      resetInputStyles();  
    }
  }

  useEffect(() => {
    inputRef.current.focus();
  }, [currentIndex, handlePrev, handleNext]);


  if (!deck || !deck.content[currentIndex]) {
    return null;
  }

  return (
    <Wrapper>
      <p>Enter a translation for the word below</p>
      <ProgressBar totalCards={deck.content.length} currentCardIndex={currentIndex} />
      {/* { infoMessage && <h2> {infoMessage}</h2> } */}
      <QwertyContainer>
        <QwertyContent>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18V14M6 14H8L13 17V7L8 10H5C3.89543 10 3 10.8954 3 12V12C3 13.1046 3.89543 14 5 14H6ZM17 7L19 5M17 17L19 19M19 12H21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h2>{deck.content[currentIndex].front.text}</h2>
        </QwertyContent>
        {/* <h2>{deck.content[currentIndex].back.text}</h2> */}
        <StyledInput
          type="text"
          maxLength={64} 
          autoFocus={true}
          value={enteredAnswer}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEnteredAnswer(e.target.value)}
          onKeyPress={handleKeyPress}
          correct={isCorrect}
          ref={inputRef}
        />
      </QwertyContainer>
      <ButtonsWrapper>
        <StyledButton onClick={handlePrev} disabled={currentIndex === 0}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 17L3 12M3 12L8 7M3 12H21" />
          </svg>
        </StyledButton>
        <StyledButton className="check" onClick={handleCheck}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3.93552C14.795 3.33671 13.4368 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.662 20.9814 11.3283 20.9451 11M21 5L12 14L9 11" />
          </svg>
          <span>
            Check answer
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

export default QwertyLearningMethod