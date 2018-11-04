const db = require('../pub');

module.exports = {
  checkUser: (...params) => {
    let sql = "select count(*) as count from user where account = ? and password = ?;";
    return db.exec(sql, params);
  }
}