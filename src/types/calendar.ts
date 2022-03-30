import { Moment } from 'moment';

export type EventOrder = {
  [id: string]: number | undefined;
};

export type Event = {
  id: string;
  title: string;
  from: Moment;
  to: Moment;
  duration: number;
};

export type Cell = {
  id: number;
  date: Moment;
  events: Event[];
};

export type Row = {
  cells: Cell[];
  eventOrder: EventOrder;
};
