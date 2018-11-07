const router = require('koa-router')()

// const jwt = require('jsonwebtoken')
// const util = require('util')
// const verify = util.promisify(jwt.verify)

const initRes = require('../comm/common').initRes;
const changeRes = require('../comm/common').changeRes;
// token验证
// const checkToken = require('../comm/common').checkToken

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
    if (res.length === 0) {
      changeRes(response, 0, '账号或密码错误');
    } else {
      changeRes(response, 200, '登录成功');
      // let userInfo = {
      //   uid: res[0].id,
      //   account: res[0].account
      // }
      // const token = jwt.sign(userInfo, 'my_token', {
      //   expiresIn: '2h'
      // })
      // response.token = token
      delete res[0].password
      ctx.session.userInfo = res[0]
    }
  }).catch(err => {
    changeRes(response, -100, '服务器错误，用户信息检查出现错误');
  });
  ctx.body = response;
})

// 获取我的信息
router.get('/myinfo', async (ctx, next) => {
  let uid = 1,
    response = initRes();
    await userModel.getUserInfo(uid).then(res => {
      response.data = res[0];
    }).catch(err => {
      changeRes(response, -100, '服务器错误，获取我的信息失败');
      response.error = err;
    })
    ctx.body = response;
})

module.exports = router
