import styled from 'styled-components';
import Button from '../Button/Button';

interface FlipcardProps {
  isFlipped?: boolean;
}

interface FlipcardContentProps {
  isVisible: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
`;

export const FlipcardContainer = styled.div<FlipcardProps>`
  display: flex;
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
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
  transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(180deg)' : 'rotateY(0)')};
  margin-bottom: 2rem;
`;

export const FlipcardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: ${({theme}) => theme.colors.primaryLight};
`;

export const FlipcardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-color: ${({theme}) => theme.colors.primaryLight};
`;

export const FlipcardContent = styled.div<FlipcardContentProps>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
  
export const StyledButton = styled(Button)`

  & > svg > path {
    stroke: ${({theme}) => theme.colors.gold};
    stroke-width: 1;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  &:hover path {
    stroke: ${({theme}) => theme.colors.gray};
  } 
  
  &:disabled {
    color: ${({ theme }) => theme.colors.gray};
    border: 2px solid ${({ theme }) => theme.colors.gray};
    
    & > svg > path {
      stroke: ${({theme}) => theme.colors.gray};
    }
  }
`;