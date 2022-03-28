import React, { FC, useRef } from 'react';
import { Moment } from 'moment';
import { CalendarTypes } from '../../../types';
import { EventListWrapper, StyledButtonWrapper, StyledButton } from './EventList.styled';
import { dateDiff, isEventBlank } from '../../../utils';
import EventItem from '../EventItem/EventItem';
import { EventItemHeight } from '../EventItem/EventItem.styled';

interface IEventListProps {
  date: Moment;
  events: CalendarTypes.Event[];
  eventOrder: CalendarTypes.EventOrder;
  hiddenEvents: CalendarTypes.Event[];
}

const EventList: FC<IEventListProps> = ({ date, events, eventOrder, hiddenEvents }) => {
  const visibleEvents = events.filter((event) => !hiddenEvents.find((e) => e.id === event.id));
  const hiddenEventsCount = events.length - visibleEvents.length;
  const eventListRef = useRef<HTMLDivElement | null>(null);

  const renderEventItem = (event: CalendarTypes.Event) => {
    const leftDays = event.duration - dateDiff(date, event.from, 'day');
    const availableDays = 7 - date.day();
    const length = leftDays > availableDays ? availableDays : leftDays;
    const isEnd = leftDays < availableDays;

    return (
      <EventItem
        key={event.id}
        event={event}
        position={eventOrder[event.id] || 0}
        length={length}
        isEnd={isEnd}
        isBlank={isEventBlank(date, event)}
      />
    );
  };

  const renderButton = () => {
    const eventListEl = eventListRef.current as HTMLDivElement;

    if (
      hiddenEventsCount > 0 &&
      (Number(eventOrder[hiddenEvents[0]?.id]) + 1) * EventItemHeight <
        eventListEl.offsetHeight + eventListEl.offsetTop
    ) {
      return (
        <StyledButtonWrapper top={Number(eventOrder[hiddenEvents[0]?.id]) * EventItemHeight}>
          <StyledButton fullWidth>More {hiddenEventsCount}</StyledButton>
        </StyledButtonWrapper>
      );
    }
    return null;
  };

  return (
    <EventListWrapper ref={eventListRef}>
      {visibleEvents.map(renderEventItem)}
      {renderButton()}
    </EventListWrapper>
  );
};

export { EventList };
