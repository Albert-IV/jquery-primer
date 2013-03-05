var lactate = require('lactate');
var express = require('express'); 

var app = express();
var port = 3000

app.all(function(req, res, next) {
	console.log( req.url );
	next();
})

app.use( lactate.static('/public') );

app.get('/', function(req, res, next) {
	res.end('<h1>jQuery Primer Server</h1>')
})

app.get('/example1', function(req, res){
  res.send('Hello World');
});

app.listen(port, function() {
	console.log('Server is listening on port ' + port)
});