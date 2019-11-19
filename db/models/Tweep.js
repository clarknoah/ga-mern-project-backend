const mongoose = require("../connection.js");
const Comment = require("./Comment.js");
const Schema = mongoose.Schema;


const Tweep = new Schema({
  tweepContent: String,
  date: Number,
  timestamp: Number,
  comments: [Comment]

})

module.exports = Tweep;
