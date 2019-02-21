const router = require("express").Router();
const centerRoutes = require("./centers");

// Center routes
router.use("/centers/", centerRoutes);

module.exports = router;
