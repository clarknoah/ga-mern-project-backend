mongoose = require("../connection.js");
const User = require("../models/User.js");
const data = require("./tweeperData.js");

const parsedCharacters = data.map((val)=>{
  return val;
})



User.deleteMany().then(res=>{
 User.create(parsedCharacters).then(created=>{
    console.log(created);
  })
})
