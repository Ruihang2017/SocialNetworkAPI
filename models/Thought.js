const { Schema, model } = require('mongoose');
const Reactions = require('./Reaction');

const thoughtSchema = new Schema(
	{
		thoughtText: {
			type: String,
			required: true,
			minLength: 1,
			maxLength: 280,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
		username: {
			type: Schema.Types.ObjectId,
			ref: 'user',
		},
		reactions: [Reactions],
	},
	{
		toJSON: {
			getters: true,
		},
		id: false,
	}
);

thoughtSchema.virtual('formatteCreatedAt').get(function () {
	// console.log(this.createdAt);
	const formattedDate = `${this.createdAt.getDate()}/${
		this.createdAt.getMonth() + 1
	}/${this.createdAt.getFullYear()} ${this.createdAt.getHours()}:${this.createdAt.getMinutes()}`;

	return formattedDate;
	// return this.createdAt;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
