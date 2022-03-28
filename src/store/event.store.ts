import { RootStore } from '.';
import { CalendarTypes } from '../types';
import { makeAutoObservable } from 'mobx';
import moment from 'moment';

class EventStore {
  public rootStore: RootStore;
  public events: CalendarTypes.Event[] = [
    {
      id: '2',
      title: 'Long Event 2',
      from: moment().clone(),
      to: moment().clone(),
      duration: 1,
    },
    {
      id: '3',
      title: 'Long Event 3',
      from: moment().clone().subtract(2, 'day'),
      to: moment().clone().subtract(1, 'day'),
      duration: 2,
    },
    {
      id: '4',
      title: 'Long Event 4',
      from: moment().clone().add(2, 'day'),
      to: moment().clone().add(3, 'day'),
      duration: 2,
    },
    {
      id: '5',
      title: 'Long Event 5',
      from: moment().clone(),
      to: moment().clone().add(1, 'day'),
      duration: 2,
    },
    {
      id: '6',
      title: 'Day Event 1',
      from: moment().clone().add(3, 'day'),
      to: moment().clone().add(3, 'day'),
      duration: 1,
    },
    {
      id: '7',
      title: 'Day Event 2',
      from: moment().clone().add(3, 'day'),
      to: moment().clone().add(3, 'day'),
      duration: 1,
    },
    {
      id: '1',
      title: 'Long Event 1',
      from: moment().clone().subtract(1, 'day'),
      to: moment().clone().add(2, 'day'),
      duration: 4,
    },
  ];

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }
}

export { EventStore };
