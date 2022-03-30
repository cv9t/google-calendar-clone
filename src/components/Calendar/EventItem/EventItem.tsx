import React, { FC, memo } from 'react';
import { CalendarTypes } from '../../../types';
import { EventItemWrapper, Container, Title } from './EventItem.styled';

interface IEventItemProps {
  event: CalendarTypes.Event;
  top: number;
  length: number;
  isEnd?: boolean;
  blank?: boolean;
  arrowRight?: boolean;
  arrowLeft?: boolean;
}

const EventItem: FC<IEventItemProps> = ({
  event,
  top,
  length,
  blank,
  isEnd,
  arrowRight,
  arrowLeft,
}) => {
  return blank ? (
    <EventItemWrapper top={top} length={length} blank />
  ) : (
    <EventItemWrapper
      top={top}
      length={length}
      isEnd={isEnd}
      arrowRight={arrowRight}
      arrowLeft={arrowLeft}
    >
      <Container>
        <Title px={1}>{event.title}</Title>
      </Container>
    </EventItemWrapper>
  );
};

const MemoizedEventItem = memo(EventItem);

export { MemoizedEventItem as EventItem };
