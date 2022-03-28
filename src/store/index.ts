import { EventStore } from './event.store';

class RootStore {
  public eventStore: EventStore;

  constructor() {
    this.eventStore = new EventStore(this);
  }
}

export { RootStore };
