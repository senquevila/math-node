var connect = require('connect');
var connectRoute = require('connect-route');
var htutil = require('./htutil');


var app = connect();
app.use(connect.favicon())
app.use(connect.logger())

app.use(connectRoute(function (router){	
	router.get('/', require('./home-node').get);
    router.get('/square', require('./square-node').get);   
    router.get('/factorial', require('./factorial-node').get);
    router.get('/fibonacci', require('./fibo2-node').get);
    router.get('/mult', require('./mult-node').get);
}))

app.listen(8124);

console.log('listening to http://localhost:8124');