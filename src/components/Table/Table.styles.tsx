import styled from 'styled-components';

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  margin: 20px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const TableHead = styled.thead`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gold};
  background-color: ${({ theme }) => theme.colors.primaryLight};
  
  & td {
    cursor: text;
    padding: 2rem;
    border-bottom-width: 2px;
  }
`;

export const TableRow = styled.tr`
  /* &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  } */
  cursor: move;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const TableCell = styled.td<{ width?: string; textAlign?: string }>`
  padding: 0 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  width: ${({ width }) => width || 'auto'};
  text-align: ${({ textAlign }) => textAlign || 'left'};

  &:last-child .row {
    display: flex;
  }
  
  &:last-child button {
    margin: 1rem 0;
    margin-right: 1rem;
  }
`;

export const EmptyCell = styled(TableCell)`
  padding: 4rem 2rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;