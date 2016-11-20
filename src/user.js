var mongoose = require('mongoose');
var  Schema = mongoose.Schema;

//ceate Schema
var UserSchema = new Schema({
  name: String,
});

//create user model.first user collection and instructs schma that user model
var User = mongoose.model('user',UserSchema);
//give access to every file
module.exports = User;
