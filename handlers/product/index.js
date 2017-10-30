const serverless = require('serverless-http');
const app = require('express')();

app.get('', function (req, res) {
  res.send('Hello World')
});

module.exports.handler = serverless(app);