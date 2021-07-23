import express from 'express';
import bodyParser from 'body-parser';

const app = express();

import fs from 'fs';
import { AddressInfo } from 'net';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import routes from './routes/routes';
routes(app, fs);

const server = app.listen(3001, () => {
  console.log('listening on port %s...', (server.address() as AddressInfo)?.port);
});