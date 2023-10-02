const router = require('express').Router();
const {
	getThought,
	getSingleThought,
	createThought,
	updateThought,
	deleteThought,
} = require('../../controllers/thoughtController');

// /api/thought
router.route('/').get(getThought).post(createThought);

// /api/thought/:id
router
	.route('/:thoughtId')
	.get(getSingleThought)
	.put(updateThought)
	.delete(deleteThought);
// .put(updateUser).delete(deleteUser);

module.exports = router;
