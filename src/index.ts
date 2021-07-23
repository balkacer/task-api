import express from 'express';

const app = express();

import fs from 'fs';
import { AddressInfo } from 'net';

app.use(express.json({limit: '20mb'}));
app.use(express.urlencoded({ extended: false, limit: '20mb' }));

import routes from './routes/routes';
routes(app, fs);

const server = app.listen(3001, () => {
  console.log('listening on port %s...', (server.address() as AddressInfo)?.port);
});