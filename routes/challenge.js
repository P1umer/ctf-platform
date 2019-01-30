const express = require('express')
const router = express.Router()

const UserModel = require('../models/users')

const checkLogin = require('../middlewares/check').checkLogin

router.get('/', checkLogin, function (req, res, next) {

  UserModel.findall().then(function (infoarr) {
    const info = {flag1num: 0, flag2num: 0, flag3num: 0, web1: 0, web2: 0, web3: 0, web1color: 'background:rgb(37,39,58); ', web2color: 'background:rgb(37,39,58) ', web3color: 'background:rgb(37,39,58) ', webnum: 0, pwnnum: 0, ctypetonum: 0}
    for (var i = 0; i < infoarr.length; i++) {
      if (infoarr[i].flag1 !== 'null') {
        info.flag1num++
      }
      if (infoarr[i].flag2 !== 'null') {
        info.flag2num++
      }
      if (infoarr[i].flag3 !== 'null') {
        info.flag3num++
      }
    }

    UserModel.getUserByName(req.session.user.name)
      .then(function (user) {
        if (user.flag1 !== 'null') {
          info.web1 = 1
          info.web1color = 'background:linear-gradient(rgb(224,78,203),rgb(37,39,58),rgb(37,39,58)); '
          info.webnum++
        }
        if (user.flag2 !== 'null') {
          info.web2 = 1
          info.web2color = 'background:linear-gradient(rgb(224,78,203),rgb(37,39,58),rgb(37,39,58)); '
          info.webnum++
        }
        if (user.flag3 !== 'null') {
          info.web3 = 1
          info.web3color = 'background:linear-gradient(rgb(224,78,203),rgb(37,39,58),rgb(37,39,58)); '
          info.webnum++
        }
        res.render('challenge', {challenge: info})
      })
  })
})

module.exports = router
