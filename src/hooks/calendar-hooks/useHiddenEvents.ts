import { MutableRefObject, useState, useEffect, useLayoutEffect } from 'react';
import { EventItemHeight } from '../../components/Calendar/EventItem/EventItem.styled';
import { CalendarTypes } from '../../types';

const useHiddenEvents = (
  row: CalendarTypes.Row,
  rowRef: MutableRefObject<HTMLDivElement | null>
): CalendarTypes.Event[] => {
  const [hiddenEvents, setHiddenEvents] = useState<CalendarTypes.Event[]>([]);

  const windowResizeHandler = () => {
    if (!rowRef.current) return;

    const rowEl = rowRef.current;
    const { cells, eventOrder } = row;
    const newHiddenEvents: CalendarTypes.Event[] = [];

    cells.forEach(({ events }) => {
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

    setHiddenEvents((prev) => {
      if (prev.length !== newHiddenEvents.length) {
        return [...newHiddenEvents].sort(
          (a, b) => Number(eventOrder[a.id]) - Number(eventOrder[b.id])
        );
      }
      return prev;
    });
  };

  useLayoutEffect(() => {
    windowResizeHandler();
  }, [row]);

  useEffect(() => {
    window.addEventListener('resize', windowResizeHandler);

    return () => {
      window.removeEventListener('resize', windowResizeHandler);
    };
  }, []);

  return hiddenEvents;
};

export { useHiddenEvents };
