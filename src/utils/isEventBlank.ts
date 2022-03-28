import { Moment } from 'moment';
import { CalendarTypes } from '../types';

function isEventBlank(date: Moment, event: CalendarTypes.Event): boolean {
  if (
    event.from.isSame(date, 'date') ||
    (!event.from.isSame(date, 'date') && date.isSame(date.clone().startOf('week'), 'date'))
  ) {
    return false;
  }

  return true;
}

export { isEventBlank };
