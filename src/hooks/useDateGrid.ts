import { Moment } from 'moment';
import { useMemo } from 'react';
import { calendarTypes } from '../types/index';
import { calcWeeksInMonth, createDateGrid } from '../utils/index';

const useDateGrid = (date: Moment): calendarTypes.ICell[][] => {
  const dateGrid: calendarTypes.ICell[][] = useMemo(() => {
    const totalWeeks = calcWeeksInMonth(date);
    return createDateGrid(date, totalWeeks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date.month()]);

  return dateGrid;
};

export { useDateGrid };
