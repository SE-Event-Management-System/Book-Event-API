'use strict';

const app = require('app');
const serverless = require('serverless-http');

module.exports.book = serverless(app);
