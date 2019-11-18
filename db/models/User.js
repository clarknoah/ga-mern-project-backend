const mongoose = require("../connection.js");
const Tweep = require("./Tweep.js");
const Comment = require("./Comment.js");
const Schema = mongoose.Schema;

const User = new Schema({
  firstName: String,
  lastName: String,
  tweeps: [Tweep]

})

module.exports = mongoose.model('user', User);
