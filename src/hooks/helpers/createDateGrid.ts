import { Moment } from 'moment';
import { CalendarTypes } from '../../types';
import { getEventOrder } from '../../helpers/';

function createDateGrid(
  date: Moment,
  totalWeeks: number,
  events: CalendarTypes.Event[]
): CalendarTypes.Row[] {
  const startDate = date.clone().startOf('month').startOf('week').subtract(1, 'day');
  const dateGrid: CalendarTypes.Row[] = [];
  let c = 0;

  for (let i = 0; i < totalWeeks; i++) {
    const cells: CalendarTypes.Cell[] = [];
    for (let j = 0; j < 7; j++) {
      const cellDate = startDate.add(1, 'day').clone();
      const cell: CalendarTypes.Cell = {
        id: c++,
        date: cellDate,
        events: events.filter((e) => cellDate.isBetween(e.from, e.to, 'days', '[]')),
      };
      cells.push(cell);
    }
    const row = { cells, eventOrder: getEventOrder([...cells]) };

    dateGrid.push(row);
  }

  return dateGrid;
}

export { createDateGrid };
