var express = require('express');
var telegramRouter = express.Router();


// define the home page route
telegramRouter.get('/getMe', function (req, res) {
  res.send('Birds home page')
})
// define the about route
telegramRouter.get('/sendMessage', function (req, res) {
  res.send('About birds')
})

telegramRouter.get('/setWebhook', function (req, res) {
  res.send('About birds')
})

module.exports = telegramRouter