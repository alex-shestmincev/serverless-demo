const serverless = require('serverless-http');
const app = require('express')();
const bodyParser  = require('body-parser');

app.use(bodyParser.json());

app.get('/product', function (req, res) {

  const result = {
    params: req.params,
    body: req.body,
    query: req.query,
    headers: req.headers,
  }
  res.json(result)
});

app.get('/product/:id', function (req, res) {

  const result = {
    params: req.params,
    body: req.body,
    query: req.query,
    headers: req.headers,
  }
  res.json(result)
});

app.get('/product/:id/:name', function (req, res) {

  const result = {
    params: req.params,
    body: req.body,
    query: req.query,
    headers: req.headers,
  }
  res.json(result)
});

app.post('/product', function (req, res) {
console.log('req', req)
  const result = {
    params: req.params,
    body: req.body,
    query: req.query,
    headers: req.headers,
  }
  res.json(result)
});

module.exports.handler = serverless(app);