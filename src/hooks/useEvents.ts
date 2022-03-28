import { MutableRefObject } from 'react';
import { CalendarTypes } from '../types';
import { useEventOrder } from './useEventOrder';
import { useHiddenEvents } from './useHiddenEvents';

const useEvents = (
  row: CalendarTypes.Cell[],
  rowRef: MutableRefObject<HTMLDivElement | null>
): { eventOrder: CalendarTypes.EventOrder; hiddenEvents: CalendarTypes.Event[] } => {
  const eventOrder = useEventOrder(row);
  const hiddenEvents = useHiddenEvents(row, eventOrder, rowRef);

  return { eventOrder, hiddenEvents };
};

export { useEvents };
