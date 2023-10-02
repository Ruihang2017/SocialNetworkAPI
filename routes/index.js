const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.unsubscribe((req, res) => {
	return res.send('Wrong routes!');
});

module.exports = router;
