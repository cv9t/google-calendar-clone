import React, { FC, useEffect } from 'react';
import { Moment } from 'moment';
import { CalendarTypes } from '../../../types';
import { EventListWrapper, StyledButtonWrapper, StyledButton } from './EventList.styled';
import { dateDiff } from '../../../helpers';
import { EventItem } from '../EventItem/EventItem';
import { EventItemHeight } from '../EventItem/EventItem.styled';

interface IEventListProps {
  currentDate: Moment;
  cellDate: Moment;
  events: CalendarTypes.Event[];
  eventOrder: CalendarTypes.EventOrder;
  hiddenEvents: CalendarTypes.Event[];
}

const EventList: FC<IEventListProps> = ({
  currentDate,
  cellDate,
  events,
  eventOrder,
  hiddenEvents,
}) => {
  const visibleEvents = events.filter((event) => !hiddenEvents.find((e) => e.id === event.id));
  const hiddenEventsCount = events.length - visibleEvents.length;

  useEffect(() => {
    console.log('EventList render');
  });

  const isFull = (date: Moment, event: CalendarTypes.Event): boolean => {
    return (
      (!event.from.isSame(date, 'date') && date.isSame(date.clone().startOf('week'), 'date')) ||
      event.from.isSame(date, 'date')
    );
  };

  const renderEventItem = (event: CalendarTypes.Event) => {
    if (!isFull(cellDate, event)) {
      return (
        <EventItem key={event.id} event={event} length={1} top={eventOrder[event.id] || 0} blank />
      );
    }

    const leftDays = event.duration - dateDiff(cellDate, event.from, 'day');
    const availableDays = 7 - cellDate.day();
    const length = leftDays > availableDays ? availableDays : leftDays;
    const isEnd = leftDays < availableDays + 1;
    const startDate = currentDate.clone().startOf('month').startOf('week');
    const endDate = currentDate.clone().endOf('month').endOf('week');
    const arrowRight = cellDate.isSame(endDate, 'week') && dateDiff(event.to, endDate, 'day') > 0;
    const arrowLeft =
      cellDate.isSame(startDate, 'date') && dateDiff(event.from, startDate, 'day') < 0;

    return (
      <EventItem
        key={event.id}
        event={event}
        top={eventOrder[event.id] || 0}
        length={length}
        isEnd={isEnd}
        arrowRight={arrowRight}
        arrowLeft={arrowLeft}
      />
    );
  };

  const renderButton = () => {
    if (hiddenEventsCount > 0) {
      return (
        <StyledButtonWrapper top={Number(eventOrder[hiddenEvents[0]?.id]) * EventItemHeight}>
          <StyledButton fullWidth>More {hiddenEventsCount}</StyledButton>
        </StyledButtonWrapper>
      );
    }
    return null;
  };

  return (
    <EventListWrapper>
      {visibleEvents.map(renderEventItem)}
      {renderButton()}
    </EventListWrapper>
  );
};

export { EventList };
