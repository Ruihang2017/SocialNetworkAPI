const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
	{
		reactionId: {
			type: Schema.Types.ObjectId,
			default: () => new Types.ObjectId(),
		},
		reactionBody: {
			type: String,
			required: true,
		},
		username: {
			type: Schema.Types.ObjectId,
			ref: 'Thought',
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		toJSON: {
			getters: true,
		},
		id: false,
	}
);

reactionSchema.virtual('formatteCreatedAt').get(() => {
	const formattedDate = this.createdAt.createdAt.toLocaleDateString();
	const formattedTime = this.createdAt.createdAt.toLocaleTimeString();

	return `${formattedDate} at ${formattedTime}`;
});

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
