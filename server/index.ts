require('dotenv').config({ path: __dirname + '/.env' });
import Server from './server';
const server = new Server();
const port: number = parseInt(process.env.PORT, 10) || 3700;
server.run(port);
