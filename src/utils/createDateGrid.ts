import { Moment } from 'moment';
import { calendarTypes } from '../types';

const createDateGrid = (date: Moment, totalWeeks: number): calendarTypes.ICell[][] => {
  const startDate = date.clone().startOf('month').startOf('week').subtract(1, 'day');
  const dateGrid: calendarTypes.ICell[][] = [];

  for (let i = 0; i < totalWeeks; i++) {
    const row: calendarTypes.ICell[] = [];
    for (let j = 0; j < 7; j++) {
      const cellDate = startDate.add(1, 'day').clone();
      const cell: calendarTypes.ICell = {
        id: (i + 1) * (j + 1),
        date: cellDate,
      };

      row.push(cell);
    }

    dateGrid.push(row);
  }

  return dateGrid;
};

export { createDateGrid };
