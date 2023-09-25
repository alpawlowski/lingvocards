import styled from 'styled-components';

export const Deck = styled.div`
  min-height: 150px;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr 1.5fr 1fr 0.75fr;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.gray};
  padding: 3rem;
  cursor: pointer;
`;

export const StyledHeading = styled.div`
  border-radius: 10px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fonts.bold};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.gold};
`;

export const StyledDescription = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.gray};
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray};
`;

export const StyledDate = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.fonts.light};
  color: ${({ theme }) => theme.colors.gray};
`;
