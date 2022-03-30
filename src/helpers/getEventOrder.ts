import { CalendarTypes } from '../types';
import { dateDiff } from '.';

function resetEventOrder(cells: CalendarTypes.Cell[]): CalendarTypes.EventOrder {
  const result: CalendarTypes.EventOrder = {};
  const passedEvents: CalendarTypes.Event[] = [];

  cells.forEach((cell) => {
    cell.events.forEach((event) => {
      if (!passedEvents.find((e) => e.id === event.id)) {
        result[event.id] = undefined;
        passedEvents.push(event);
      }
    });
  });

  return result;
}

function getPositions(
  events: CalendarTypes.Event[],
  positions: CalendarTypes.EventOrder
): number[] {
  const result: number[] = [];

  events.forEach((event) => {
    const position = positions[event.id];

    if (position !== undefined) {
      result.push(position);
    }
  });

  return result;
}

function getEventOrder(cells: CalendarTypes.Cell[]): CalendarTypes.EventOrder {
  const eventOrder: CalendarTypes.EventOrder = resetEventOrder(cells);

  cells.forEach(({ date, events }) => {
    const headEvents = events
      .filter(
        (event) =>
          event.from.isSame(date, 'date') ||
          (!event.from.isSame(date, 'date') && date.isSame(date.clone().startOf('week'), 'date'))
      )
      .sort((a, b) => {
        if (a.from.isSame(b.from, 'date')) return b.duration - a.duration;
        return dateDiff(b.from, a.from, 'date') < 0 ? 1 : -1;
      });
    const positions = getPositions(events, eventOrder);
    let it = 0;

    events.forEach((event, idx) => {
      if (!positions.includes(idx) && it < headEvents.length) {
        const headEvent = headEvents[it];
        eventOrder[headEvent.id] = idx;
        it++;
      }
    });
  });

  return eventOrder;
}

export { getEventOrder };
