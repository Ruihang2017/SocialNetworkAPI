const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const { Types } = require('mongoose');

const {
	getRandomReactions,
	getRandomUsername,
	thoughtData,
	usernameData,
	reactionData,
	getRandomThoughts,
} = require('./data');

connection.on('error', (err) => err);
connection.once('open', async () => {
	console.log('connected');

	// Delete the collections if they exist
	let userCheck = await connection.db
		.listCollections({ name: 'users' })
		.toArray();
	if (userCheck.length) {
		await connection.dropCollection('users');
	}

	let ThoughtCheck = await connection.db
		.listCollections({ name: 'thoughts' })
		.toArray();
	if (ThoughtCheck.length) {
		await connection.dropCollection('thoughts');
	}

	// seed collections
	seedThought();
	seedUser();

	console.log('Successful seeded');
});

const seedUser = async () => {
	// create empty array for the users
	const users = [];
	usernameData.forEach((data) => {
		const username = data;
		const email = `${data}@sampleEmail.com`;
		users.push({
			username,
			email,
		});
	});

	await User.collection.insertMany(users);
};

const seedThought = async () => {
	const thoughts = [];
	let reactions;

	thoughtData.forEach((data) => {
		const reactionId = new Types.ObjectId();
		const thoughtText = data;
		const createdAt = new Date();
		const userName = getRandomUsername();

		reactions = [];
		let reactionsData = getRandomReactions();
		if (reactionsData) {
			reactionsData.forEach((data) => {
				const reactionBody = data;
				const userName = getRandomUsername();
				const createdAt = new Date();
				reactions.push({
					reactionId,
					reactionBody,
					userName,
					createdAt,
				});
			});
		}
		thoughts.push({
			thoughtText,
			createdAt,
			userName,
			reactions,
		});
	});
	await Thought.collection.insertMany(thoughts);
};
