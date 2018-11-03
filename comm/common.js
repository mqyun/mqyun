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

module.exports = {
  initRes,
  changeRes
}