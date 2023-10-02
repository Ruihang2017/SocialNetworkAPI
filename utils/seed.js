const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const {
	getRandomReaction,
	getRandomUsername,
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

	// create empty array for the users
	const users = [];
	for (let i = 0; i < 5; i++) {
		const username = getRandomUsername();
		const email = `${username}@sampleEmail.com`;
		users.push({
			username,
			email,
		});
	}

	await User.collection.insertMany(users);
});
