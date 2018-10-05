import axios from 'axios';

export class ForecastService {
  async get5Days(lat: number, lon: number) {
    const baseUrl = 'https://api.weatherbit.io/v2.0/forecast/3hourly';
    const res = await this.getRes(baseUrl, lat, lon);
    return res.data;
  }

  async getCurrent(lat: number, lon: number) {
    const baseUrl = 'https://api.weatherbit.io/v2.0/current ';
    const res = await this.getRes(baseUrl, lat, lon);
    return res.data;
  }

  private async getRes(baseUrl: string, lat: number, lon: number) {
    const url = `${baseUrl}?key=${
      process.env.API_Key
    }&lang=zh-tw&lat=${lat}&lon=${lon}`;
    const res = await axios.get<any>(url);
    return res;
  }
}
