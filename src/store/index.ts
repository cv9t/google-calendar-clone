import { WeatherService } from '../service/WeatherService';
import { EventStore } from './event.store';
import { WeatherStore } from './weather.store';

class RootStore {
  public eventStore: EventStore;
  public weatherStore: WeatherStore;

  constructor() {
    this.eventStore = new EventStore(this);
    this.weatherStore = new WeatherStore(this, new WeatherService());
  }
}

export { RootStore };
