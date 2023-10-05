const { User, Thought } = require('../models');

module.exports = {
	// Get all users
	async getUsers(req, res) {
		try {
			const users = await User.find();
			res.json(users);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	// Get a single user
	async getSingleUser(req, res) {
		try {
			const user = await User.findOne({ _id: req.params.userId }).select(
				'-__v'
			);

			if (!user) {
				return res.status(404).json({ message: 'No user with that ID' });
			}

			res.json(user);
		} catch (err) {
			res.status(500).json(err);
		}
	},
	// create a new user
	async createUser(req, res) {
		try {
			console.log('createUser');
			const user = await User.create(req.body);
			res.json(user);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	// updateUser
	async updateUser(req, res) {
		try {
			const user = await User.findOneAndUpdate(
				{ _id: req.params.userId },
				req.body,
				{ new: true }
			);

			res.json(user);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	// Delete a user and associated apps
	async deleteUser(req, res) {
		try {
			const user = await User.findOneAndRemove({ _id: req.params.userId });
			// console.log(user);
			const thought = await Thought.deleteMany({ userName: user.username });
			if (!user) {
				return res.status(404).json({ message: 'No user with that ID' });
			}

			res.status(200).json({ message: 'User and associated thought deleted!' });
		} catch (err) {
			res.status(500).json(err);
		}
	},

	// createFriend
	async createFriend(req, res) {
		try {
			const user = await User.findOneAndUpdate(
				{ _id: req.params.userId },
				{ $addToSet: { friends: req.body.friends } },
				{ new: true }
			).select('-__v');

			res.json(user);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	// deteleFriend
	async deleteFriend(req, res) {
		try {
			const user = await User.findOneAndUpdate(
				{ _id: req.params.userId },
				{ $pull: { friends: req.body.friend } },
				{ new: true }
			).select('-__v');

			res.json(user);
		} catch (err) {
			res.status(500).json(err);
		}
	},
};
