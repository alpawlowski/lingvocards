import styled from 'styled-components';
import Input from '../Input/Input';
import Button from '../Button/Button';

interface QwertyProps {
  correct?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
`;

export const QwertyContainer = styled.div<QwertyProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  min-width: 30vw;
  max-width: 40vw;
  min-height: 20vh;
  aspect-ratio: 2 / 1; // ↔️ is double the ↕️
  transform-style: preserve-3d;
  transition: transform 0.6s;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.gold};
  background-color: ${({theme}) => theme.colors.primaryLight};
  border-radius: 1.5rem;  

  @media screen and (max-width: 768px) {
    max-width: 100vw;
    width: 100%;
  }
`;

export const QwertyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg{
    cursor: pointer;
    margin-right: 1.5rem;
  }

  & > svg > path {
    stroke: ${({theme}) => theme.colors.gray};
    stroke-width: 1;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  
  & > svg:hover > path {
    stroke: ${({theme}) => theme.colors.gray};
    stroke-width: 1;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: ${({theme}) => theme.colors.gray};
  }
`;

export const StyledInput = styled(Input)`
  border: 1px solid ${({ correct, theme }) => (correct ? theme.colors.correct : theme.colors.gray)};
  background: ${({ theme, correct }) => (correct ? `rgba(${theme.colors.correctRGB}, 0.1)` : theme.colors.primaryLight)};
  
  &.wrong {
    background: ${({ theme }) => `rgba(${theme.colors.badRGB}, 0.1)`};
    border: 1px solid ${({theme }) => theme.colors.bad};
  }

  @media screen and (max-width: 768px) {
    max-width: 90%;
    width: 80%;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
  
export const StyledButton = styled(Button)`

  &.check > svg {
    margin-right: .5rem;
  }
`;