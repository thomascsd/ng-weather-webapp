import dotenv from 'dotenv';
import { Handler } from '@netlify/functions';
import { ForecastService } from './services/forecastService';

dotenv.config({ path: './.env' });

const handler: Handler = async (event, context) => {
  const lat = parseInt(event.queryStringParameters.lat, 10);
  const lon = parseInt(event.queryStringParameters.lon, 10);
  const service = new ForecastService();
  const data = await service.getDays(lat, lon);

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

export { handler };
