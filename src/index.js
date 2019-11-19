const express = require("express");
const app = express();
const User = require("../db/models/User.js");
const bodyParser = require("body-parser");

const routes = require('./routes/index.js');

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


app.get('/', (req, res) => {
  res.send("Hello API");
})

app.post('/login', (req, res) => {
  let user = req.body;
  User.find(user)
    .then(result => {
      console.log(result);
      res.json(result);
    })
})

app.post('/user', (req, res) => {
  let user = req.body;
  User.create(user)
    .then(result => {
      console.log(result);
      res.json(result);
    })
})

app.get('/user/:handle', (req, res) => {
  let handle = req.params.handle;
  let user = req.body;
  User.find({ handle: handle })
    .then(result => {
      console.log(result);
      res.json(result);
    })
})

app.use(routes)


app.set("port", process.env.PORT || 5555);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
