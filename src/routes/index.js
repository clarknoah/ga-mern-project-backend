const commentRoutes = require("./commentRoutes.js");
const User = require("../../db/models/User.js");
router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello API");
});

router.post("/login", (req, res) => {
  let user = req.body;
  User.find(user).then(result => {
    res.json(result);
  });
});

router.use(require("./userRoutes.js"));
router.use(require("./tweepRoutes.js"));
router.use(require("./commentRoutes.js"));

module.exports = router;
