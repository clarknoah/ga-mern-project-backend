const mongoose = require("../connection.js");
const Comment = require("./Comment.js");
const Schema = mongoose.Schema;

const Tweep = new Schema({

  tweepContent:String,
  authorHandle:String,
  caretTags:[String],
  date:Number,
  timestamp:Date,
  comments:[Comment],
  likes:Number,
  userTags:[String]

})


module.exports = Tweep;
