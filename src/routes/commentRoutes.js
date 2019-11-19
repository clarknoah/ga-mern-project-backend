const express = require("express");
const router = express();
const ctrl = require('../controllers/comments.js');


router.get('/user/:handle/tweeps/:tId/comments', ctrl.createComment);

module.exports = router;
