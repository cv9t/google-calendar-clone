import { Moment } from 'moment';
import { CalendarTypes } from '../types';
import { dateDiff } from './dateDiff';

const resetEventOrder = (row: CalendarTypes.Cell[]): CalendarTypes.EventOrder => {
  const result: CalendarTypes.EventOrder = {};
  const passedEvents: CalendarTypes.Event[] = [];

  row.forEach((cell) => {
    cell.events.forEach((event) => {
      if (!passedEvents.find((e) => e.id === event.id)) {
        result[event.id] = undefined;
        passedEvents.push(event);
      }
    });
  });

  return result;
};

const getPositions = (
  events: CalendarTypes.Event[],
  positions: CalendarTypes.EventOrder
): number[] => {
  const result: number[] = [];

  events.forEach((event) => {
    const position = positions[event.id];

    if (position !== undefined) {
      result.push(position);
    }
  });

  return result;
};

const headEventsFilter =
  (date: Moment) =>
  (event: CalendarTypes.Event): boolean => {
    return (
      event.from.isSame(date, 'date') ||
      (!event.from.isSame(date, 'date') && date.isSame(date.clone().startOf('week'), 'date'))
    );
  };

const headEventsSort = (a: CalendarTypes.Event, b: CalendarTypes.Event): number => {
  if (a.from.isSame(b.from, 'date')) {
    return b.duration - a.duration;
  }

  return dateDiff(b.from, a.from, 'date') < 0 ? 1 : -1;
};

const getEventOrder = (row: CalendarTypes.Cell[]): CalendarTypes.EventOrder => {
  const eventOrder: CalendarTypes.EventOrder = resetEventOrder(row);

  row.forEach(({ date, events }) => {
    const headEvents = events.filter(headEventsFilter(date)).sort(headEventsSort);
    const positions = getPositions(events, eventOrder);
    let it = 0;

    events.forEach((event, idx) => {
      if (!positions.includes(idx) && it < headEvents.length) {
        console.log(eventOrder);
        const headEvent = headEvents[it];
        eventOrder[headEvent.id] = idx;
        it++;
      }
    });
  });

  return eventOrder;
};

export { getEventOrder };
