import styled from 'styled-components';

export const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const ProgressBarTitle = styled.p`
  font-size: 1.3rem;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
`;

export const TileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProgressBarInside = styled.div<{ isActive: boolean, width: number }>`
  display: flex;
  width: ${({ isActive, width }) => isActive ? `${width}px` : '2rem'};
  height: 0.5rem;
  margin: 0 0.5rem;
  background-color: ${({ isActive, theme }) => isActive ? theme.colors.gold : theme.colors.secondary};
  border-radius: 0.5rem;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  position: absolute;
`;

export const ProgressBarCover = styled.div<{ isActive: boolean, width: number }>`
  position: relative;
  display: flex;
  width: ${({ isActive, width }) => isActive ? `${width}px` : '2rem'};
  height: 1rem;
  margin: 0;
  background-color: ${({ isActive, theme }) => isActive ? theme.colors.primaryLight : theme.colors.gray};
  border-radius: 0.5rem;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
`;