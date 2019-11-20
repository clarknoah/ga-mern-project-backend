const express = require("express");
const router = express();
const ctrl = require("../controllers/comments.js");

// Test
router.put("/user/:handle/tweeps/:id/comments", ctrl.createComment);
// router.put("/user/:handle/tweeps/:id", ctrl.createComment);

module.exports = router;
