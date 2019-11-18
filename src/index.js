const express = require("express");
const app = express();
const User = require("../db/models/User.js");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use(express.static('doc'));


/**
 * @api {get} / Test API
 * @apiName TestApi
 * @apiGroup Test
 *
 *
 * @apiSuccess {String} count Says Hello API
 */
app.get('/',(req,res)=>{
  res.send("Hello API");
})



app.set("port", process.env.PORT || 5555);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
