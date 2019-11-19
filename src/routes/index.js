const commentRoutes = require("./commentRoutes.js");
const tweepRoutes = require("./commentRoutes.js");
router = require('express').Router();

router.use(commentRoutes);
router.use(tweepRoutes);


module.exports = router;
