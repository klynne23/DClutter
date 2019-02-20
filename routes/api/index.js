const router = require('express').Router();
const centerRoutes = require('./centers');

router.use('/centers', centerRoutes);

module.exports = router;
