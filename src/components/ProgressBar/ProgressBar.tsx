import React from 'react';
import { ProgressBarWrapper, ProgressBarTittle, TileWrapper, ProgressBarTile } from './ProgressBar.styles';

interface ProgressBarProps {
  totalCards: number;
  currentCardIndex: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ totalCards, currentCardIndex }) => {
  const progressBarTiles = Array.from({ length: totalCards }, (_, i) => (
    <ProgressBarTile key={i} isActive={i <= currentCardIndex} />
  ));

  return (
    <ProgressBarWrapper>
      <ProgressBarTittle>{`${currentCardIndex + 1} / ${totalCards}`}</ProgressBarTittle>
      <TileWrapper>
        {progressBarTiles}
      </TileWrapper>
    </ProgressBarWrapper>
  );
}

export default ProgressBar;
