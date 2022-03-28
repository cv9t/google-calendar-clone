import React, { FC } from 'react';
import { Moment } from 'moment';
import { DateGridWrapper, GridWrapper } from './DateGrid.styled';
import { useDateGrid } from '../../../hooks/index';
import { DateRow } from '../DateRow/DateRow';

interface IDateGridProps {
  currentDate: Moment;
}

const DateGrid: FC<IDateGridProps> = ({ currentDate }) => {
  const dateGrid = useDateGrid(currentDate);

  return (
    <DateGridWrapper>
      <GridWrapper>
        {dateGrid.map((row, idx) => (
          <DateRow key={idx} currentDate={currentDate} row={row} />
        ))}
      </GridWrapper>
    </DateGridWrapper>
  );
};

export { DateGrid };
