import { CalendarTypes } from '../../types';
import moment from 'moment';

function getCurrentWeekday(dateGrid: CalendarTypes.Cell[][]): number {
  let currentWeekday;
  for (let i = 0; i < dateGrid.length; i += 1) {
    for (let j = 0; j < dateGrid.length; j += 1) {
      const cell = dateGrid[i][j];
      if (cell.date.isSame(moment(), 'date')) {
        currentWeekday = cell.date.weekday();
        break;
      }
    }
  }
  return currentWeekday || 0;
}

export { getCurrentWeekday };
