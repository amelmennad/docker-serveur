"use strict";
const express = require('express');
const router = express.Router();
const app = express();
app.get('/', (req, res) => {
    res.json('Hello World');
});
module.exports = app;
