mongoose = require("../connection.js");
const User = require("../models/User.js");
const cJson = require("./tweeperData.json");

const parsedCharacters = characterJson.map((val)=>{
  return val;
})



User.deleteMany().then(res=>{
 User.create(parsedCharacters).then(created=>{
    console.log(created);
  })
})
