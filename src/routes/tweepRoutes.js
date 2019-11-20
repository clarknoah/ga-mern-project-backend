const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/tweeps.js");
//ctrl.createTweep

router.get("/", (req, res) => {
  console.log("The route is finalluy working");
  res.send("working");
});

// router.put("/", ctrl.createTweep);

router.put("/user/:handle/tweeps", ctrl.createTweep);
router.delete("/user/:handle/tweeps/:id", ctrl.deleteTweep);
router.put("/user/:handle/tweeps/:id", ctrl.updateTweep);
router.get("/user/:handle/tweeps/:id", ctrl.readTweep);

module.exports = router;
