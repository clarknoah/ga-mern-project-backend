const mongoose = require("../connection.js");
const Schema = mongoose.Schema;

const Comment = new Schema({
  commentContent:String

})

module.exports = Comment;


heroku config:set DB_URL="mongodb+srv://mongodb:<password>@cluster0-y3mxh.mongodb.net/test?retryWrites=true&w=majority
"
