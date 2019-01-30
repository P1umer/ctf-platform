const User = require('../lib/mongo').User

module.exports = {
  // 注册一个用户
  create: function create (user) {
    return User.create(user).exec()
  },

  // 通过用户名获取用户信息
  getUserByName: function getUserByName (name) {
    return User
      .findOne({ name: name })
      .exec()
  },

  updateflag1: function updateflag1 (name, changevalue, score) {
    User.updateOne({ name: name }, { $set: { score: score } }, { upsert: true }).exec()
    return User.updateOne({ name: name }, { $set: { flag1: changevalue } }, { upsert: true }).exec()
  },

  updateflag2: function updateflag2 (name, changevalue, score) {
    User.updateOne({ name: name }, { $set: { score: score } }, { upsert: true }).exec()
    return User.updateOne({ name: name }, { $set: { flag2: changevalue } }, { upsert: true }).exec()
  },

  updateflag3: function updateflag3 (name, changevalue, score) {
    User.updateOne({ name: name }, { $set: { score: score } }, { upsert: true }).exec()
    return User.updateOne({ name: name }, { $set: { flag3: changevalue } }, { upsert: true }).exec()
  },

  findall: function findall () {
    return User.find({}, {name: 1, score: 1}).exec()
  }
}
