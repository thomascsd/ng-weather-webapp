import { ID } from '@datorama/akita';

export interface Forecast {
  id: ID;
  data: ForecastDatum[];
  count: number;
}

export interface ForecastDatum {
  lat: string;
  lon: string;
  pres: number;
  timezone: string;
  ob_time: string;
  country_code: string;
  clouds: number;
  ts: number;
  weather: Weather;
  uv: number;
  datetime: string;
  city_name: string;
  sunrise: string;
  sunset: string;
  temp: number;
  rh: number;
}

export interface Weather {
  icon: string;
  code: string;
  description: string;
}

export function createCurrentForecast(params: Partial<Forecast>) {
  return {
    data: [],
    count: 0
  } as Forecast;
}
