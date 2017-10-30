require('babel-core/register');
const serverless = require('serverless-http');
const Koa = require('koa');

// construct your app as normal
const app = new Koa();
// register your middleware as normal
app.use(async ctx => {
  ctx.body = 'Hello World';
});

// this is it!
module.exports.handler = serverless(app);