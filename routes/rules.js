
const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin

// GET /signin 登录页
router.get('/', checkLogin, function (req, res, next) {
  res.render('rules')
})
module.exports = router
