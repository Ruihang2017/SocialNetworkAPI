const { Schema, model } = require('mongoose');

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			validate: {
				validator: function (value) {
					const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
					return emailRegex.test(value);
				},
				message: 'Invalide email address',
			},
		},
		thoughts: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Thought',
			},
		],
		friends: [
			{
				type: Schema.Types.ObjectId,
				ref: 'user',
			},
		],
	},
	{
		toJSON: {
			getters: true,
		},
		id: false,
	}
);

const User = model('user', userSchema);

module.exports = User;
