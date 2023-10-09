import styled from 'styled-components';

export const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const ProgressBarTittle = styled.p`
  font-size: 1.3rem;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
`;

export const TileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProgressBarTile = styled.div<{ isActive: boolean }>`
  display: flex;
  width: 2rem;
  height: 1rem;
  margin: 0 2px;
  background-color: ${({ isActive, theme }) => isActive ? theme.colors.primaryLight : theme.colors.secondary};
  border-radius: 0.5rem;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
`;