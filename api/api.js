const express = require('express');
const configuration = require('./config');

const app = express();

const router = express.Router();

/*
 * This is only for development purposes!. The app in production should only accept the origin of the application itself.
 * Allow axios cross domain requests. '*' should be removed for security reasons.
 */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
});

router.use(require('./routes/images'));

app.use('/api', router);

app.listen(configuration.server.port);
console.log('API listening on port: ' + configuration.server.port);