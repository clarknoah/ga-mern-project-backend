const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/tweeps.js");
//ctrl.createTweep

router.get("/", (req, res) => {
  console.log("The route is finalluy working");
  res.send("working");
});

router.put("/", ctrl.createTweep);

module.exports = router;
