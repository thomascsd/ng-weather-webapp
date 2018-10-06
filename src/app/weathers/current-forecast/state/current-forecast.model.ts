import { ID } from '@datorama/akita';

export interface CurrentForecast {
  id: ID;
  data: Datum[];
  count: number;
}

export interface Datum {
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

export function createCurrentForecast(params: Partial<CurrentForecast>) {
  return {
    data: [],
    count: 0
  } as CurrentForecast;
}
