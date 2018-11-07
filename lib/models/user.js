const db = require('../pub');

module.exports = {
  // 验证用户账号密码是否正确
  checkUser: (...params) => {
    let sql = "SELECT * FROM user WHERE account = ? AND password = ?;";
    return db.exec(sql, params);
  },
  // 根据用户ID查询用户信息
  getUserInfo: (...params) => {
    let sql = "SELECT * FROM user WHERE id = ?;";
    return db.exec(sql, params);
  },
  // 修改某用户信息
  updateUserInfo: (...params) => {
    let sql = "UPDATE user SET nickname = ?, phone = ?, address = ? where id = ?;";
    return db.exec(sql, params);
  }
}