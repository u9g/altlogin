# mineflayer-altlogin

This package wraps mineflayer's createBot function to allow login with a username:password string

## Installation:

`npm i mineflayer-altlogin`

## Example:

```js
const mineflayer = require('mineflayer-altlogin')

const bot = mineflayer.createBot({
  host: 'localhost',
  login: 'username:password'
})

bot.on('spawn', () => {
  console.log("I'm in!")
})
```