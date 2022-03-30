import React, { FC, useEffect, useRef } from 'react';
import { Moment } from 'moment';
import { CalendarTypes } from '../../../types';
import { DateRowWrapper, Presentation, Wrapper } from './DateRow.styled';
import { DateCell } from '../DateCell/DateCell';
import { EventList } from '../EventList/EventList';
import { useHiddenEvents } from '../../../hooks';

interface IDateRowProps {
  currentDate: Moment;
  row: CalendarTypes.Row;
}

const DateRow: FC<IDateRowProps> = ({ currentDate, row }) => {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const hiddenEvents = useHiddenEvents(row, rowRef);

  useEffect(() => {
    console.log('DateRow render');
  });

  return (
    <DateRowWrapper>
      <Wrapper>
        {row.cells.map((cell) => (
          <DateCell key={cell.id} currentDate={currentDate} cell={cell} />
        ))}
      </Wrapper>
      <Presentation ref={rowRef}>
        {row.cells.map((cell) => (
          <Wrapper key={cell.id}>
            <EventList
              date={cell.date}
              events={cell.events}
              eventOrder={row.eventOrder}
              hiddenEvents={hiddenEvents}
            />
          </Wrapper>
        ))}
      </Presentation>
    </DateRowWrapper>
  );
};

export { DateRow };
