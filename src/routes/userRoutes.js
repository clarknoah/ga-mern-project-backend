const express = require("express");
const router = express();
const ctrl = require("../controllers/users.js");

router.get("/", (req, res) => {
  console.log("The route is finalluy working");
  res.send("working");
});

router.post("/user", ctrl.createUser);
router.delete("/user/:handle", ctrl.deleteUser);
router.get("/user/:handle", ctrl.readUser);
router.put("/user/:handle", ctrl.updateUser);

module.exports = router;
