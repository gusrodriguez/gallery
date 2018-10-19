const express = require('express');
const configuration = require('./config');

const app = express();

const router = express.Router();

/*
 * Allow axios cross domain requests.
 * This is only for development purposes. The app in production mode should only accept the origin of the application itself.
 */
let allow = null;
if (process.env.NODE_ENV === 'development') { 
  allow = configuration.api.allowOriginDev;
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', allow);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
});

router.use(require('./routes/images'));

app.use('/api', router);

app.listen(configuration.server.port);
console.log('API listening on port: ' + configuration.server.port);