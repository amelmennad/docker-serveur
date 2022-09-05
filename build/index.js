"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require('dotenv');
const path = require('path');
const appfile = require('./app');
const config = require('../config');
dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`),
});
appfile.listen(config.PORT, config.HOST, () => {
    console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
});
