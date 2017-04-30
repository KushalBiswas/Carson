var	 bodyParser = require('body-parser'),
	 nunjucks = require('nunjucks'),
	 MongoClient = require('mongodb').MongoClient,
	 assert = require('assert'),
	 express = require('express'),
	 webhookrouter = express.Router();

//middleware specific to this router
	webhookrouter.use(function timeLog (req, res, next) {
	  console.log('Time: ', Date.now())
	  next()
	})

	// define the home page route
	webhookrouter.post('/aazaaawebhook', function (req, res) {
	  
		res.send();
	})
	

	webhookrouter.get('/setWebhook', function (req, res) {
	  res.send('About birds')
	})

	module.exports = webhookrouter;