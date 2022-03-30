import axios from 'axios';
import { getLocation } from '../utils/';

class WeatherService {
  private API_URL = 'https://api.openweathermap.org/data/2.5/onecall?';
  private API_KEY = '0e9f44157f68c104a8ee2ca14a608df4';

  public async fetchWeather() {
    const { lat, lon } = await getLocation();
    const response = await axios.get(this.API_URL, {
      params: {
        lat,
        lon,
        units: 'metric',
        appid: this.API_KEY,
      },
    });

    return response.data;
  }
}

export { WeatherService };
