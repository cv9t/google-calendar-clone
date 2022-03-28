import React from 'react';
import { CalendarTypes } from '../../../types';
import { EventItemWrapper, Container, Title } from './EventItem.styled';

interface IEventItemProps {
  event: CalendarTypes.Event;
  position: number;
  length: number;
  isEnd?: boolean;
  isBlank?: boolean;
}

function EventItem({ event, position, length, isEnd, isBlank }: IEventItemProps) {
  return isBlank ? (
    <EventItemWrapper top={position} length={length} style={{ zIndex: '-1' }} />
  ) : (
    <EventItemWrapper top={position} length={length} isEnd={isEnd}>
      <Container>
        <Title px={1}>{event.title}</Title>
      </Container>
    </EventItemWrapper>
  );
}

export default EventItem;
