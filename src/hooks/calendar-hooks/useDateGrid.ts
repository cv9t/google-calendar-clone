import { Moment } from 'moment';
import { useMemo } from 'react';
import { CalendarTypes } from '../../types/.';
import { calcWeeksInMonth, createDateGrid, getCurrentWeekday } from '../helpers';

type ReturnValue = {
  dateGrid: CalendarTypes.Row[];
  currentWeekday: number;
};

const useDateGrid = (date: Moment, events: CalendarTypes.Event[]): ReturnValue => {
  const dateGrid: CalendarTypes.Row[] = useMemo(() => {
    const totalWeeks = calcWeeksInMonth(date);
    return createDateGrid(date, totalWeeks, events);
  }, [date.month(), events]);

  const currentWeekday: number = useMemo(() => getCurrentWeekday(dateGrid), [date.date()]);

  return { dateGrid, currentWeekday };
};

export { useDateGrid };
