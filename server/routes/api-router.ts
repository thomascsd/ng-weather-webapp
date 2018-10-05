import * as express from 'express';
import { Route } from '../interfaces/Route';
import { Router } from '../interfaces/Router';
import { ForecastService } from '../services/forecastService';

const get5DaysRoute: Route = {
  path: '/get5Days',
  async handler(req: express.Request, res: express.Response) {
    const service = new ForecastService();
    const lat = req.query.lat;
    const lon = req.query.lon;

    try {
      const data = await service.get5Days(lat, lon);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  }
};

const currentRoute: Route = {
  path: '/getCurrent',
  async handler(req: express.Request, res: express.Response) {
    const service = new ForecastService();
    const lat = req.query.lat;
    const lon = req.query.lon;

    try {
      const data = await service.getCurrent(lat, lon);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  }
};

export default class ApiRouter implements Router {
  setRouter(router: express.Router) {
    router.get(get5DaysRoute.path, get5DaysRoute.handler);
    router.get(currentRoute.path, currentRoute.handler);
  }
}
