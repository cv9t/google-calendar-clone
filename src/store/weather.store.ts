import { makeAutoObservable, runInAction } from 'mobx';
import moment from 'moment';
import { RootStore } from '.';
import { WeatherService } from '../service/WeatherService';

class WeatherStore {
  private rootStore: RootStore;
  private transportLayer: WeatherService;
  public isLoading = true;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public dates: any[] = [];

  constructor(rootStore: RootStore, transportLayer: WeatherService) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.transportLayer = transportLayer;
  }

  public async loadWeather() {
    this.isLoading = true;
    this.dates = [];

    try {
      const data = await this.transportLayer.fetchWeather();
      runInAction(() => {
        this.dates = [
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...data.daily.map((day: { dt: any }) => ({
            ...day,
            dt: moment(day.dt, 'X').startOf('day'),
          })),
        ];
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}

export { WeatherStore };
