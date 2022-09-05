export {};
const dotenv = require('dotenv');
const path = require('path');

// eslint-disable-next-line import/no-unresolved
const app = require('app');

const config = require('../config');

if (process.env.NODE_ENV !== "prod") {
  dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`),
  });

  app.listen(config.PORT, config.HOST, () => {
    console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
  });
} else {
  app.listen(config.PORT, () => {
    console.log(`APP LISTENING ON http://${config.PORT}`);
  });
}