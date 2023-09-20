import styled, { css } from 'styled-components';

interface ButtonProps {
  secondary?: boolean;
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
  color: ${({ theme }) => theme.colors.gold};
  border: 2px solid ${({ theme }) => theme.colors.gold};
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.primary};
  
  &:hover {
    color: ${({ theme }) => theme.colors.gray};
    border: 2px solid ${({ theme }) => theme.colors.gray};
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
`;

export default Button;