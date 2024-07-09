import http from 'http';
import express, { Express, Request, Response, NextFunction } from 'express';
import { SERVER } from './config/config';
import route from './routes';

const app: Express = express();

route(app);

const server = http.createServer(app);

server.listen(SERVER.PORT, () => {
    console.log(
        `Server is running on http://${SERVER.HOSTNAME}:${SERVER.PORT}`,
    );
});
