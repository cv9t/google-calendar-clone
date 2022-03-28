import { useEffect, useState } from 'react';
import { CalendarTypes } from '../types';
import { getEventOrder } from '../utils';

const useEventOrder = (row: CalendarTypes.Cell[]): CalendarTypes.EventOrder => {
  const [eventOrder, setEventOrder] = useState<CalendarTypes.EventOrder>({});

  useEffect(() => {
    setEventOrder(getEventOrder(row));
  }, [row]);

  return eventOrder;
};

export { useEventOrder };
