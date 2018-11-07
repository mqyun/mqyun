// const jwt = require('jsonwebtoken')
// const util = require('util')
// const verify = util.promisify(jwt.verify)

/*
  初始化接口返回
  code : >0请求成功 <0请求失败，接口错误 200正常 0请求正常，但操作错误
*/
const initRes = () => {
  return {
    "code": 200,
    "message": '请求成功'
  }
}

// 修改接口返回
const changeRes = (response, code, message) => {
  response.code = code
  response.message = message
  return response
}

// 验证token
// async function checkToken(ctx, next) {
//   const token = ctx.header.authorization;
//   let payload;
//   let response = initRes();
//   if (token) {
//     payload = await verify(token.split(' ')[1], 'my_token');
//     ctx.request.body.uid = payload.uid;
//     await next(payload);
//   } else {
//     changeRes(response, 0, '您还未登录');
//     ctx.body = response;
//   }
// }

module.exports = {
  initRes,
  changeRes
}