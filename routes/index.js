const router = require('koa-router')()

const initRes = require('../comm/common').initRes;
const changeRes = require('../comm/common').changeRes;

const userModel = require('../lib/models/user');

// 登录页
router.get('/', async (ctx, next) => {
  await ctx.render('login', {
    title: 'login'
  })
})

// 登录
router.post('/login', async (ctx, next) => {
  let {
    account,
    password
  } = ctx.request.body,
    response = initRes();
  await userModel.checkUser(account, password).then(res => {
    if (res[0].count == 0) {
      changeRes(response, 0, '用户不存在');
    } else {
      changeRes(response, 200, '登录成功');
    }
  }).catch(err => {
    changeRes(response, -100, '服务器错误，用户信息检查出现错误');
  });
  ctx.body = response;
})

// 获取我的信息
router.get('/myinfo', async (ctx, next) => {
  let {
    uid
  } = ctx.request.body,
    response = initRes();
    await userModel.getUserInfo(uid).then(res => {
      response.data = res[0];
    }).catch(err => {
      changeRes(response, -100, '服务器错误，获取我的信息失败');
    })
})

module.exports = router
