const router = require('koa-router')()

// 登录页
router.get('/', async (ctx, next) => {
  await ctx.render('login', {
    title: 'login'
  })
})

module.exports = router
