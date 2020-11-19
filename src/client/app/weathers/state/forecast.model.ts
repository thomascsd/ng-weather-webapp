import { ID } from '@datorama/akita';

export interface ForecastDatum {
  id: ID;
  clouds?: number;
  weather?: Weather;
  valid_date?: string;
  temp: number;
  max_temp: number;
  min_temp: number;
  uv?: number;
  rh?: number;
  city_name?: string;
  lon?: string;
  timezone?: string;
  lat?: string;
  country_code?: string;
}

export interface Weather {
  icon: string;
  code: string;
  description: string;
}

export function createCurrentForecast(params: Partial<ForecastDatum>) {
  return {
    temp: 0,
    max_temp: 0,
    min_temp: 0,
    city_name: ''
  } as ForecastDatum;
}
