import styled from 'styled-components';

export const Select = styled.select`
  padding: 0 2rem;
  margin: 1rem 1.5rem;
  font-weight: bold;
  height: 47px;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.gold};
  border: 2px solid ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  resize: none;
  min-width: 25%;
  width: auto;

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;
