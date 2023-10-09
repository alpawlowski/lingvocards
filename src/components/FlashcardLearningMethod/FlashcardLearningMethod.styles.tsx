import styled, { css } from 'styled-components';
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

const CommonFlipcardStyles = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: ${({theme}) => theme.colors.primaryLight};
  border-radius: 1.5rem;
  & * {
    text-shadow: 1px 5px .5rem ${({theme}) => theme.colors.primary};
  }
`;

export const FlipcardFront = styled.div`
  ${CommonFlipcardStyles}
`;

export const FlipcardBack = styled.div`
  ${CommonFlipcardStyles}
  transform: rotateY(180deg);
`;


export const FlipcardContent = styled.div<FlipcardContentProps>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.gold};
  font-weight: ${({ theme }) => theme.fonts.bold};
  font-size: 2rem;

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

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
  
export const StyledButton = styled(Button)`

  &.check > svg {
    margin-right: .5rem;
  }

`;