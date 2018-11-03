const router = require('koa-router')()

const initRes = require('../comm/common').initRes;
const changeRes = require('../comm/common').changeRes;

// 登录页
router.get('/', async (ctx, next) => {
  await ctx.render('login', {
    title: 'login'
  })
})

// 登录
roter.post('/login', async (ctx, next) => {
  let {
    account,
    password
  } = ctx.request.body,
    response = initRes();
  ctx.body = response
})

module.exports = router
