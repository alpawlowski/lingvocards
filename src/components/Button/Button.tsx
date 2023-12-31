import styled, { css } from 'styled-components';

interface ButtonProps {
  secondary?: boolean;
  icon?: boolean;
  hideOnSmartphone?: boolean;
}

const Button = styled.button<ButtonProps>`

  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 1.5rem;
  height: 47px;
  color: ${({ theme }) => theme.colors.gray};
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.primary};
  
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
    border: 2px solid ${({ theme }) => theme.colors.gold};
  }

  & > svg > path {
    stroke: ${({theme}) => theme.colors.gray};
    stroke-width: 1;
    stroke-linecap: round;
    stroke-linejoin: round;
    padding-right: 1.5rem;
  }

  &:hover path {
    stroke: ${({theme}) => theme.colors.gold};
  } 
  
  &:disabled {
    color: ${({ theme }) => theme.colors.secondary};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    cursor: not-allowed;
    
    & > svg > path {
      stroke: ${({theme}) => theme.colors.secondary};
    }
  }

  @media screen and (max-width: 768px) {
    margin: 0.7rem 1rem;
  }
  
  ${({ secondary }) =>
    secondary &&
    css`
      min-width: 105px;
      width: auto;
      height: 30px;
      font-size: 1.2rem;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.gray};
      border: 2px solid ${({ theme }) => theme.colors.gray};
      padding: 0 1.5rem;

      &:hover {
        color: ${({ theme }) => theme.colors.gold};
        border: 2px solid ${({ theme }) => theme.colors.gold};
      }
  `}

  ${({ icon }) =>
    icon &&
    css`
      display: none;

      display: flex;
      height: 40px;
      min-width: 40px;
      width: auto;
      padding: 0;
      margin: 0;
      border: none;
      @media screen and (max-width: 768px) {
      }
  `}

  ${({ hideOnSmartphone }) =>
    hideOnSmartphone &&
    css`
      @media screen and (max-width: 768px) {
        display: none;
      }
  `}

`;

export default Button;