const router = require('express').Router();

const postRoutes = require('./user-routes');

router.use('/post', postRoutes);

module.exports = router;