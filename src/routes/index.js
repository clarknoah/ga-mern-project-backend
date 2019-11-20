const commentRoutes = require("./commentRoutes.js");
const User = require("../../db/models/User.js");
router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello API");
});

router.post("/login", (req, res) => {
  let user = req.body;
  User.find(user).then(result => {
    console.log(result);
    res.json(result);
  });
});

router.post("/user", (req, res) => {
  let user = req.body;
  User.create(user).then(result => {
    console.log(result);
    res.json(result);
  });
});

router.get("/user/:handle", (req, res) => {
  let handle = req.params.handle;
  console.log(handle);
  User.find({ handle: handle }).then(result => {
    console.log(result);
    res.json(result);
  });
});

router.use(require("./tweepRoutes.js"));
router.use(require("./commentRoutes.js"));

module.exports = router;
