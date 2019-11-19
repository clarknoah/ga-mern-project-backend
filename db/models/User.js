const mongoose = require("../connection.js");
const Tweep = require("./Tweep.js");
const Comment = require("./Comment.js");
const Schema = mongoose.Schema;

const User = new Schema({
  firstName: String,
  lastName: String,
  tweeps: [Tweep],
  // tweeps: String,
  handle: {
    type: String,
    required: true,
    unique: true
  },
  bio: String,
  dateCreated: Date,
  lastLogin: Date,
  description: String
});

module.exports = mongoose.model("user", User);
