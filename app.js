var express = require('express')
  , app = module.exports = express()
  , mongo = require('./mongo-db.js');

app.use(express.favicon());
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'))

app.get('/get-users', function(req, res, next) {
  mongo.findAll(function (e, users) {
  	if (e) return res.json( { error: e } );

  	if (!users.length) {
  		console.log('no users!');
  	}

  	res.json( { users: users } )
  })
});

app.post('/remove-user', function(req, res, next) {

})

app.post('/add-user', function(req, res, next) {
	mongo.addUser(req.body, function(e) {
		if (e) return res.json( {error: e } );

		res.json( { response: 'success' } );
	})
});

app.post('/rename-user', function(req, res, next) {

})

if (!module.parent){
  app.listen(3000);
  console.log('Express started on port 3000');
}