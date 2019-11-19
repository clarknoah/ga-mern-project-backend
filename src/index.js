const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use("/doc", express.static("doc"));

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


app.post('/login',(req,res)=>{
  let user = req.body;
  console.log("Got User Login");
  console.log(user);
  User.find(user)
    .then(result=>{
      console.log(result);
      res.json(result);
    })
})


app.post('/user',(req,res)=>{
  let user = req.body;
  User.create(user)
    .then(result=>{
      console.log(result);
      res.json(result);
    })
})


app.get('/user/:handle',(req,res)=>{
  let handle = req.params.handle;
  let user = req.body;
  User.find({handle:handle})
    .then(result=>{
      console.log(result);
      res.json(result);
    })
})


app.use(require("./routes/index.js"));

app.set("port", process.env.PORT || 5555);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

//this is my dummy comment to test merge-ability from tweeproutes branch
