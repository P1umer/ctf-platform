module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/signin')
  })
  app.use('/signup', require('./signup'))
  app.use('/signin', require('./signin'))
  app.use('/signout', require('./signout'))
  app.use('/challenge', require('./challenge'))
  app.use('/scoreboard', require('./scoreboard'))
  app.use('/userinfo', require('./userinfo'))
  app.use('/submitpwn1', require('./submitpwn1'))
  app.use('/submitpwn2', require('./submitpwn2'))
  app.use('/submitpwn3', require('./submitpwn3'))
  app.use('/rules', require('./rules'))
  app.use('/hall', require('./hall'))

  // 404 page
  app.use(function (req, res) {
    if (!res.headersSent) {
      res.status(404).render('404')
    }
  })
}
