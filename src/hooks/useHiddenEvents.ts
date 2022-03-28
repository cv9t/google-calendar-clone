import { MutableRefObject, useEffect, useState } from 'react';
import { EventItemHeight } from '../components/Calendar/EventItem/EventItem.styled';
import { CalendarTypes } from '../types';
import { useWindowSize } from './useWindowSize';

function useHiddenEvents(
  row: CalendarTypes.Cell[],
  eventOrder: CalendarTypes.EventOrder,
  rowRef: MutableRefObject<HTMLDivElement | null>
) {
  const [hiddenEvents, setHiddenEvents] = useState<CalendarTypes.Event[]>([]);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (!rowRef.current) return;

    const rowEl = rowRef.current;
    const newHiddenEvents: CalendarTypes.Event[] = [];

    row.forEach(({ events }) => {
      events.forEach((event) => {
        const position = eventOrder[event.id] || 0;

        if (position === events.length - 1) {
          if (
            !newHiddenEvents.find((v) => v.id === event.id) &&
            EventItemHeight * (position + 1) >= rowEl.clientHeight
          ) {
            newHiddenEvents.push(event);
          }
        } else if (position < events.length - 1) {
          if (
            !newHiddenEvents.find((v) => v.id === event.id) &&
            EventItemHeight * (position + 2) >= rowEl.clientHeight
          ) {
            newHiddenEvents.push(event);
          }
        }
      });
    });

    setHiddenEvents([
      ...newHiddenEvents.sort((a, b) => Number(eventOrder[a.id]) - Number(eventOrder[b.id])),
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowRef.current, windowSize.height]);

  return hiddenEvents;
}

export { useHiddenEvents };
