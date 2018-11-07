const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

// const jwtKoa = require('koa-jwt')

const session = require('koa-session')

const index = require('./routes/index')
const users = require('./routes/users')
const sentence = require('./routes/sentence')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// JWT : json web token
// app.use(jwtKoa({
//   secret: 'my_token'
// }).unless({
//   path: [/^\//]
// }))

app.keys = ['some secret hurr'];
const CONFIG = {
  key: 'koa:sess',
  maxAge: 86400000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false
}
app.use(session(CONFIG, app))
app.use(async (ctx, next) => {
  ctx.userInfo = ctx.session.userInfo;
  if (ctx.session.userInfo) {
    ctx.state.userInfo = ctx.session.userInfo;
  }
  await next();
})

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(sentence.routes(), sentence.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
