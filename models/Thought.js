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
			ref: 'Thought',
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

thoughtSchema.virtual('formatteCreatedAt').get(() => {
	const formattedDate = this.createdAt.createdAt.toLocaleDateString();
	const formattedTime = this.createdAt.createdAt.toLocaleTimeString();

	return `${formattedDate} at ${formattedTime}`;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
