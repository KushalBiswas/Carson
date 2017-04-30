const 	request = require('request'),
		assert = require('assert'),
		bodyParser = require('body-parser'),
		config = require('config'),
		CONTENT_TYPE_JSON = 'application/json',
		BOT_API_URL = 'https://api.telegram.org/bot',
		BOT_TOKEN = '295289612:AAHyYfQEjTf06pETb-kSs30DZPKcdFLVAvY';

function RestServiceInvoker() {

	this.URL = BOT_API_URL+BOT_API_KEY;

	this.callSendBOTAPI=function (messageData,method,callback) {
		console.log('Calling Rest Service');
		console.log(this.URL+method);
		request.post({
			url: this.URL+method,
			headers: {'content-type' : CONTENT_TYPE_JSON},
			json: messageData
		}, function(error, response, body){
			console.log(body);

			if(error){
				console.log('Response Recieved'+body);
			}
			if(response.statusCode !== 200 ) {
				console.log('Response Recieved'+body);

			}
			callback(body);
		});
	}
}

module.exports.RestServiceInvoker = RestServiceInvoker;
