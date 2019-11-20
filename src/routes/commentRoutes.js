const express = require("express");
const router = express();
const ctrl = require("../controllers/comments.js");

router.get("/", (req, res) => {
  console.log("The route is finalluy working");
  res.send("working");
});

router.post("/user/:handle/tweeps/:id/comments", ctrl.createComment);
router.delete("/user/:handle/tweeps/:id/comments/:cId", ctrl.createComment);

module.exports = router;
