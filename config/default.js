module.exports = {
  port: 3001,
  session: {
    secret: 'Browser dog',
    key: 'pwn',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/pwn'
}
