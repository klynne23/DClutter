const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// If no API routes are used, then the user gets index.html file
router.use((req, res) => res.sendFile(path.join(__dirname, '../client/build/index.html')));

module.exports = router;
