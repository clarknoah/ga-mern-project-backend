const express = require("express");
const router = express();
const ctrl = require('../controllers/tweeps.js');


router.get('/user/:handle/tweeps', ctrl.createTweeps);

module.exports = router;
