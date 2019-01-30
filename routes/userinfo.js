const express = require('express')
const router = express.Router()
const UserModel = require('../models/users')

const checkLogin = require('../middlewares/check').checkLogin

router.get('/', checkLogin, function (req, res, next) {
  UserModel.getUserByName(req.session.user.name)
    .then(function (user) {
      user.webnum = 0
      if (user.flag1 !== 'null') {
        user.webnum++
      }
      if (user.flag2 !== 'null') {
        user.webnum++
      }
      if (user.flag3 !== 'null') {
        user.webnum++
      }
      res.render('userinfo', {userinfo: user})
    })
})

module.exports = router
