const 	express = require('express'),
		nunjucks = require('nunjucks'),
		MongoClient = require('mongodb').MongoClient,
		assert = require('assert'),
		crypto = require('crypto'),
		env = process.env,
		https = require('https'),  
		request = require('request'),
		bodyParser = require('body-parser');




var app = express();
app.set('port', env.NODE_PORT || 3000);
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static('public'));

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