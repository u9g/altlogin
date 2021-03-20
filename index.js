const mineflayer = require('mineflayer')

module.exports = {
  createBot: ({ login, username: _u_, password: _p_, ...rest }, ...args) => {
    const [username, password] = login.split(':')
    return mineflayer.createBot({
      username,
      password,
      ...rest
    }, ...args)
  }
}
