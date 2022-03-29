import { Moment } from 'moment';
import { useMemo } from 'react';
import { CalendarTypes } from '../../types/.';
import { calcWeeksInMonth, createDateGrid, getCurrentWeekday } from '../../utils/.';

function useDateGrid(
  date: Moment,
  events: CalendarTypes.Event[]
): { dateGrid: CalendarTypes.Cell[][]; currentWeekday: number } {
  const dateGrid: CalendarTypes.Cell[][] = useMemo(() => {
    const totalWeeks = calcWeeksInMonth(date);
    return createDateGrid(date, totalWeeks, events);
  }, [date.month(), events]);

  const currentWeekday: number = useMemo(() => getCurrentWeekday(dateGrid), [date.date()]);

  return { dateGrid, currentWeekday };
}

export { useDateGrid };
