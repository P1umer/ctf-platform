const express = require('express')
const router = express.Router()

const flagmodel = require('../models/flag')
const UserModel = require('../models/users')

router.post('/', function (req, res, next) {
  const name = req.session.user.name
  const pwn2flag = req.fields.pwn2_flag

  flagmodel.getflagByindex('2').then(function (flag) {
    UserModel.getUserByName(name).then(function (user) {
      if (user.flag2 !== flag.flag && pwn2flag === flag.flag) {
        const score = user.score + 1000
        UserModel.updateflag2(name, flag.flag, score)
      }
    })
  })
  res.redirect('/challenge')
})

module.exports = router
