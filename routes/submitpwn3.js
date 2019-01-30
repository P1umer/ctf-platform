const express = require('express')
const router = express.Router()

const flagmodel = require('../models/flag')
const UserModel = require('../models/users')

router.post('/', function (req, res, next) {
  const name = req.session.user.name
  const pwn3flag = req.fields.pwn3_flag

  flagmodel.getflagByindex('3').then(function (flag) {
    UserModel.getUserByName(name).then(function (user) {
      if (user.flag3 !== flag.flag && pwn3flag === flag.flag) {
        const score = user.score + 1000
        UserModel.updateflag3(name, flag.flag, score)
      }
    })
  })
  res.redirect('/challenge')
})

module.exports = router
