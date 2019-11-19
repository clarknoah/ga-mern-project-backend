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

app.use(require("./routes/index.js"));

app.set("port", process.env.PORT || 5555);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

//this is my dummy comment to test merge-ability from tweeproutes branch
