const mongoose = require("../connection.js");
const Schema = mongoose.Schema;

const Comment = new Schema({
  commentContent:String,
  authorId:String,
  timestamp:Date,
  likes:Number

})

module.exports = Comment;
