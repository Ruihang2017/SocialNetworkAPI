const { User, Thought } = require('../models');
const { Types } = require('mongoose');

module.exports = {
	// getThought
	async getThought(req, res) {
		try {
			const thoughts = await Thought.find();

			res.json(thoughts);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);
		}
	},

	// getSingleThought
	async getSingleThought(req, res) {
		try {
			const thought = await Thought.findOne({
				_id: req.params.thoughtId,
			}).select('-__v');

			if (!thought) {
				return res.status(404).json({ message: 'No thought with that ID' });
			}

			res.json(thought);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	// createThought
	async createThought(req, res) {
		try {
			console.log('createThought');
			const thought = await Thought.create(req.body);
			const user = await User.findOneAndUpdate(
				{ _id: req.body.userName },
				{ $addToSet: { thoughts: thought._id } },
				{ new: true }
			).select('-__v');

			res.json({ thought: thought, user: user });
		} catch (err) {
			res.status(500).json(err);
		}
	},

	// updateThought
	async updateThought(req, res) {
		try {
			const thought = await Thought.findOneAndUpdate(
				{ _id: req.params.thoughtId },
				req.body,
				{ new: true }
			);

			res.json(thought);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	// deleteThought
	async deleteThought(req, res) {
		try {
			const thought = await Thought.findOneAndRemove({
				_id: req.params.thoughtId,
			});

			if (!thought) {
				return res.status(404).json({ message: 'No thought with that ID' });
			}

			res.json({ message: 'User and associated apps deleted!' });
		} catch (err) {
			res.status(500).json(err);
		}
	},

	// createFriend
	async createReaction(req, res) {
		try {
			console.log('createReaction');
			// const reaction = await Thought.create(req.body);
			const reaction = {
				reactionId: new Types.ObjectId(),
				reactionBody: req.body.reaction.reactionBody,
				username: req.body.reaction.username,
				createdAt: new Date(),
			};
			const thought = await Thought.findOneAndUpdate(
				{ _id: req.params.thoughtId },
				{ $addToSet: { reactions: reaction } },
				{ new: true }
			).select('-__v');

			res.json(thought);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	// deteleFriend
	async deleteReaction(req, res) {
		try {
			console.log('deleteReaction');

			const thought = await Thought.findOneAndUpdate(
				{ _id: req.params.thoughtId },
				{ $pull: { reactions: { reactionId: req.body.reactionId } } },
				{ new: true }
			).select('-__v');

			res.json(thought);
		} catch (err) {
			res.status(500).json(err);
		}
	},
};
