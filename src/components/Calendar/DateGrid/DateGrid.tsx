import React, { FC } from 'react';
import { Moment } from 'moment';
import { DateGridWrapper, GridWrapper } from './DateGrid.styled';
import { useStore, useDateGrid } from '../../../hooks/index';
import { DateRow } from '../DateRow/DateRow';
import { observer } from 'mobx-react-lite';

interface IDateGridProps {
  currentDate: Moment;
}

const DateGrid: FC<IDateGridProps> = observer(({ currentDate }) => {
  const { eventStore } = useStore();
  const dateGrid = useDateGrid(currentDate, eventStore.events);

  return (
    <DateGridWrapper>
      <GridWrapper>
        {dateGrid.map((row, idx) => (
          <DateRow key={idx} currentDate={currentDate} row={row} />
        ))}
      </GridWrapper>
    </DateGridWrapper>
  );
});

export { DateGrid };
