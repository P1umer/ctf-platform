const express = require('express')
const router = express.Router()

const UserModel = require('../models/users')
const checkLogin = require('../middlewares/check').checkLogin

router.get('/', checkLogin, function (req, res, next) {
  UserModel.findall().then(function (infoarr) {
    function compare (pro) {
      return function (obj1, obj2) {
        var val1 = obj1[pro]
        var val2 = obj2[pro]
        if (val1 < val2) {
          return 1
        } else if (val1 > val2) {
          return -1
        } else {
          return 0
        }
      }
    }
    infoarr.sort(compare('score'))
    res.render('scoreboard', {scoreboard: infoarr})
  })
})

module.exports = router
