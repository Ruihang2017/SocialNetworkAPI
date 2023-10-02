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
			ref: 'thought',
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

reactionSchema.virtual('formatteCreatedAt').get(function () {
	const formattedDate = `${this.createdAt.getDate()}/${
		this.createdAt.getMonth() + 1
	}/${this.createdAt.getFullYear()} ${this.createdAt.getHours()}:${this.createdAt.getMinutes()}`;

	return formattedDate;
});

module.exports = reactionSchema;
