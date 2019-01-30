const flag = require('../lib/mongo').flag

module.exports = {
  // 注册一个用户
  create: function create (user) {
    return flag.create(user).exec()
  },

  // 通过用户名获取用户信息
  getflagByindex: function getflagByindex (index) {
    return flag
      .findOne({ index: index })
      .addCreatedAt()
      .exec()
  }
}
