import { JsonController, Get, QueryParam } from 'routing-controllers';
import { Inject } from 'typedi';
import { ForecastService } from '../services/forecastService';

@Inject()
@JsonController()
export class ForecastController {
  constructor(private forecastService: ForecastService) {}

  @Get('/getDays')
  getDays(@QueryParam('lat') lat: number, @QueryParam('lon') lon: number) {
    return this.forecastService.getDays(lat, lon);
  }

  @Get('/getLocation')
  getLocation(@QueryParam('city') city: string) {
    return this.forecastService.getLocation(city);
  }
}
