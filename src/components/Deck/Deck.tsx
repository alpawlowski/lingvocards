import styled from 'styled-components';

export const Deck = styled.div`
  min-height: 150px;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr 1fr;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.gray};
  padding: 3rem;
  cursor: pointer;
`;

export const StyledHeading = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: ${({ theme }) => theme.fonts.bold};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.gold};
`;
