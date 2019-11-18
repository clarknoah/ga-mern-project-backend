const mongoose = require("../connection.js");
const Schema = mongoose.Schema;

const Comment = new Schema({
  commentContent:String

})

module.exports = Comment;
