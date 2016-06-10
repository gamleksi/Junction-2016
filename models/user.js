// var mongoose = require('mongoose');
// var bcrypt = require('bcryptjs');

// // Use Schema

// var UserSchema = mongoose.Schema({
// 	firstname: {
// 		type: String
// 	},
// 	lastname: {
// 		type: String
// 	},
// 	email: {
// 		type: String,
// 		index: true	
// 	},
// 	password: {
// 		type: String
// 	},
// 	isAdmin: {
// 		type: Boolean,
// 		default: false
// 	}
// });

// var User = module.exports = mongoose.model('User', UserSchema);

// module.exports.createUser = function(newUser, callback) {
// 	bcrypt.genSalt(10, function(err, salt) {
// 		bcrypt.hash(newUser.password, salt, function(err, hash) {
// 			newUser.password = hash;
// 			newUser.save(callback)
// 		});
// 	});
// };

// module.exports.getUserByEmail = function(email,callback){
// 	var query = {email: email};
// 	User.findOne(query,callback);
// };

// module.exports.comparePassword = function(candidatePassword, hash, callback){
// 	bcrypt.compare(candidatePassword,hash, function(err, isMatch){
// 		if(err) throw err;
// 		callback(null,isMatch);
// 	});
// }

// module.exports.updateProfile = function(toUpdate,callback){
// 	for(var value in toUpdate){
		
		
// 	}

// }


// module.exports.getUserById = function(id,callback){
// 	User.findById(id,callback);
// }

// module.exports.getUsers = function(callback){
// 	User.find({}, callback);
// }





// module.exports.createUser = function(newUser, callback) {
// 	bcrypt.genSalt(10, function(err, salt) {
// 		bcrypt.hash(newUser.password, salt, function(err, hash) {
// 			newUser.password = hash;
// 			newUser.save(callback)
// 		});
// 	});
// };

var bcrypt = require('bcryptjs');

module.exports = {
	createModel: function(db) {

		var User = db.define("Users", {
				firstname: String,
				lastname:  String,
				email: String,
				password: String,
				admin: Boolean
			}
		);

		// console.log(User.table)

		User.createUser = function(user, callback){

			user.admin = false;

			if(!user.password2) delete user.password2;

			// console.log(user);

			bcrypt.genSalt(10, function(err, salt) {
				bcrypt.hash(user.password, salt, function(err, hash) {
					user.password = hash;
				});
			});
			this.create(user,function(err,items){

				if(err){
					console.log("virheilmoitus: ")
					console.error(err)

				}
				else{
					console.log("WORKS LIKE A")
				}
			});
		};

		// User.getUserByEmail = function(email, callback){
		// 	return "";
		// };
		return User;
	}

};