import React, { FC, useRef } from 'react';
import { Moment } from 'moment';
import { CalendarTypes } from '../../../types';
import { DateRowWrapper, Presentation, Wrapper } from './DateRow.styled';
import { DateCell } from '../DateCell/DateCell';
import { EventList } from '../EventList/EventList';
import { useEvents } from '../../../hooks';
interface IDateRowProps {
  currentDate: Moment;
  row: CalendarTypes.Cell[];
}

const DateRow: FC<IDateRowProps> = ({ currentDate, row }) => {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const { eventOrder, hiddenEvents } = useEvents(row, rowRef);

  return (
    <DateRowWrapper>
      <Wrapper>
        {row.map((cell) => (
          <DateCell key={cell.id} currentDate={currentDate} cell={cell} />
        ))}
      </Wrapper>
      <Presentation ref={rowRef}>
        {row.map((cell) => (
          <Wrapper key={cell.id}>
            <EventList
              date={cell.date}
              events={cell.events}
              eventOrder={eventOrder}
              hiddenEvents={hiddenEvents}
            />
          </Wrapper>
        ))}
      </Presentation>
    </DateRowWrapper>
  );
};

export { DateRow };
