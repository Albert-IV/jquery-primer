var app = require('express')(); 
var lactate = require('lactate').Lactate({
  //cache:false,
  //max_age:'one day'
})

var port = 3000

// app.all(function(req, res, next) {
	// console.log( req.url );
	// next();
// })

// app.use( lactate.static(__dirname  + '/public') );

app.get('/', function(req, res, next) {
	lactate.serve(__dirname + 'index.html')
})

app.get('/example1', function(req, res){
  res.send('Hello World');
});

app.listen(port, function() {
	console.log('Server is listening on port ' + port)
});