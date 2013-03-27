var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jquery-primer')

var db = mongoose.connection;

var mongo = {};

db.on('error', function(error) {
	console.log(error)
})

db.once('open', function() {

	var userSchema = mongoose.Schema({
			name: {type: String, default: ''}
		})

	var User = mongoose.model('user', userSchema);

	mongo.findAll = function (cb) {
		User.find(function(e, users) {
			cb(e, users);
		});
	}

	mongo.addUser = function(user, cb) {
		var newUser = new User(user);

		newUser.save(function(e, nUser) {
			cb(e, nUser);
		});
	}

	mongo.removeUser = function(id, cb) {
		User.findOne({_id: id}, function(e, usr) {
			if (e) return cb(e);

			usr.remove();
			cb();
		})
	}
	
})

module.exports = exports = mongo;