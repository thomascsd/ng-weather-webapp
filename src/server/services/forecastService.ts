import axios from 'axios';

export class ForecastService {
  apiUrl = 'https://api.weatherbit.io/v2.0/forecast/daily';

  async getDays(lat: number, lon: number) {
    const url = `${this.apiUrl}?key=${
      process.env.API_KEY
    }&lang=zh-tw&lat=${lat}&lon=${lon}`;
    const res = await axios.get<any>(url);
    return res.data;
  }

  async getLocation(city: string) {
    const url = `${this.apiUrl}?key=${
      process.env.API_KEY
    }&lang=zh-tw&city=${city}`;
    const res = await axios.get<any>(url);
    return res.data;
  }
}
