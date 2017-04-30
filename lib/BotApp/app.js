const 	express = require('express'),
		nunjucks = require('nunjucks'),
		MongoClient = require('mongodb').MongoClient,
		assert = require('assert'),
		crypto = require('crypto'),
		env = process.env,
		https = require('https'),  
		request = require('request'),
		bodyParser = require('body-parser');

var 	telegramRouter= require('./telegram/telegram'),
		RestServiceInvoker = require('./telegram/telegram-client').RestServiceInvoker,
		webhookrouter= require('./telegram/telegram-webhook');

var app = express();
app.set('port', env.NODE_PORT || 3000);
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use('/static',express.static('public'));
app.use('/webhook',webhookrouter);
//app.use('/telegram-client',webhookrouter);
app.use('/telegram',telegramRouter);



app.get('/get',function(req,res){
	console.log('Request Recieved ${process.pid}');
	res.send('Hekkliohgfhg');
});
app.get('/',function(req,res){
	console.log('Request Recieved ${process.pid}');
	res.send('fgggggggggggggg');
});

app.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
	  console.log('Application worker ${process.pid} started...');
	});

module.exports = app;