import { Moment } from 'moment';
import { useMemo } from 'react';
import { CalendarTypes } from '../types/index';
import { calcWeeksInMonth, createDateGrid } from '../utils/index';

const useDateGrid = (date: Moment, events: CalendarTypes.Event[]): CalendarTypes.Cell[][] => {
  const dateGrid: CalendarTypes.Cell[][] = useMemo(() => {
    const totalWeeks = calcWeeksInMonth(date);
    return createDateGrid(date, totalWeeks, events);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date.month(), events]);

  return dateGrid;
};

export { useDateGrid };
