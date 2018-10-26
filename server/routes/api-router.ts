import * as express from 'express';
import { Route } from '../interfaces/Route';
import { Router } from '../interfaces/Router';
import { ForecastService } from '../services/forecastService';

const get5DaysRoute: Route = {
  path: '/getDays',
  async handler(req: express.Request, res: express.Response) {
    const service = new ForecastService();
    const lat = req.query.lat;
    const lon = req.query.lon;

    try {
      const data = await service.getDays(lat, lon);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  }
};

const locationRoute: Route = {
  path: '/getLocation',
  async handler(req: express.Request, res: express.Response) {
    const service = new ForecastService();
    const city = req.query.city;

    try {
      const data = await service.getLocation(city);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  }
};

export default class ApiRouter implements Router {
  setRouter(router: express.Router) {
    router.get(get5DaysRoute.path, get5DaysRoute.handler);
    router.get(locationRoute.path, locationRoute.handler);
  }
}
