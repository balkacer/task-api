// load up the express framework and body-parser helper
import express from 'express';
import bodyParser from 'body-parser';

// create an instance of express to serve our end points
const app = express();

// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files
import fs from 'fs';
import { AddressInfo } from 'net';

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this is where we'll handle our various routes from
import routes from './routes/routes';
routes(app, fs);

// finally, launch our server on port 3001.
const server = app.listen(3001, () => {
  console.log('listening on port %s...', (server.address() as AddressInfo)?.port);
});