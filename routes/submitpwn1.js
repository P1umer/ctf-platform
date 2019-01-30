const express = require('express')
const router = express.Router()

const flagmodel = require('../models/flag')
const UserModel = require('../models/users')

router.post('/', function (req, res, next) {
  const name = req.session.user.name
  const pwn1flag = req.fields.pwn1_flag

  flagmodel.getflagByindex('1').then(function (flag) {
    UserModel.getUserByName(name).then(function (user) {
      if (user.flag1 !== flag.flag && pwn1flag === flag.flag) {
        const score = user.score + 1000
        UserModel.updateflag1(name, flag.flag, score)
      }
    })
  })
  res.redirect('/challenge')
})

module.exports = router
