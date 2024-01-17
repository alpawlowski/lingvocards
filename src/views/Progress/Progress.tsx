import React from 'react';
import { ProgressBarWrapper, ProgressBarTitle, TileWrapper, ProgressBarInside, ProgressBarCover } from './Progress.styles';

const Progress: React.FC = () => {
  const numberOfDaysInTheYear: number = 365;

  const calculateDaysRemaining = (): number => {
    const currentDate: Date = new Date();
    const endOfYear: Date = new Date(currentDate.getFullYear(), 11, 31);
    const timeDifference: number = endOfYear.getTime() - currentDate.getTime();
    return timeDifference / (1000 * 60 * 60 * 24);
  };

  const calculateDaysPassed = (): number => {
    const daysRemaining: number = calculateDaysRemaining();
    return numberOfDaysInTheYear - daysRemaining;
  };

  const calculatePercentageRemaining = (): number => {
    const daysRemaining: number = calculateDaysRemaining();
    return (100 - (daysRemaining / numberOfDaysInTheYear) * 100);
  };

  const roundThePercentages = (percentageOfDaysGone: number): number => {
    const roundedNumber: number = Math.floor(percentageOfDaysGone);

    if (percentageOfDaysGone - roundedNumber >= 0.75) {
      return roundedNumber + 1;
    } else if (percentageOfDaysGone - roundedNumber >= 0.25) {
      return roundedNumber + 0.5;
    } else {
      return roundedNumber;
    }
  };

  const percentageRemaining: number = calculatePercentageRemaining();
  const roundedPercentage: string = roundThePercentages(percentageRemaining).toFixed(1);
  const numberOfDaysPassed: number = Math.round(calculateDaysPassed());

  return (
    <ProgressBarWrapper>
      <ProgressBarTitle>This is how many days have passed since the beginning of the year:</ProgressBarTitle>
      <ProgressBarTitle>{`${numberOfDaysPassed} / ${numberOfDaysInTheYear}`}</ProgressBarTitle>
      <ProgressBarTitle>{`which is ${roundedPercentage} % of the year`}</ProgressBarTitle>
      <TileWrapper>
        <ProgressBarCover isActive={numberOfDaysInTheYear > 0} width={numberOfDaysInTheYear} />
        <ProgressBarInside isActive={numberOfDaysPassed > 0} width={numberOfDaysPassed} />
      </TileWrapper>
      <ProgressBarTitle>Let's start learning</ProgressBarTitle>
    </ProgressBarWrapper>
  );
}

export default Progress;