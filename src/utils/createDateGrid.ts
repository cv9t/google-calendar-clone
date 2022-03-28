import { Moment } from 'moment';
import { CalendarTypes } from '../types';

const createDateGrid = (
  date: Moment,
  totalWeeks: number,
  events: CalendarTypes.Event[]
): CalendarTypes.Cell[][] => {
  const startDate = date.clone().startOf('month').startOf('week').subtract(1, 'day');
  const dateGrid: CalendarTypes.Cell[][] = [];
  let c = 0;

  for (let i = 0; i < totalWeeks; i++) {
    const row: CalendarTypes.Cell[] = [];
    for (let j = 0; j < 7; j++) {
      const cellDate = startDate.add(1, 'day').clone();
      const cell: CalendarTypes.Cell = {
        id: c++,
        date: cellDate,
        events: events.filter((e) => cellDate.isBetween(e.from, e.to, 'days', '[]')),
      };
      row.push(cell);
    }
    dateGrid.push(row);
  }

  return dateGrid;
};

export { createDateGrid };
