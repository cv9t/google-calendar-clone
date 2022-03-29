import { useMemo } from 'react';
import { CalendarTypes } from '../../types';
import { getEventOrder } from '../../utils';

function useEventOrder(row: CalendarTypes.Cell[]): CalendarTypes.EventOrder {
  const eventOrder = useMemo(() => getEventOrder(row), [row]);
  return eventOrder;
}

export { useEventOrder };
