import { Handler } from '@netlify/functions';
import { ForecastService } from './services/forecastService';

const handler: Handler = async (event, context) => {
  const city = event.queryStringParameters.city;
  const service = new ForecastService();
  const data = await service.getLocation(city);

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

export { handler };
