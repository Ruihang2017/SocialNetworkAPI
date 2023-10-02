const usernameData = [
	'CyberNinja',
	'StarGazer',
	'TechSavvy',
	'UrbanExplorer',
	'ZenMaster',
	'QuantumCoder',
	'SkyDiver',
	'MysticWanderer',
];

const thoughtData = [
	'The only limit is the one you set for yourself.',
	'Every accomplishment starts with the decision to try.',
	'Success is not final, failure is not fatal: It is the courage to continue that counts.',
	"Don't watch the clock; do what it does. Keep going.",
	'Happiness is not by chance, but by choice.',
	"Your time is limited, so don't waste it living someone else's life.",
	'The best way to predict the future is to create it.',
	'Life is short, and it is up to you to make it sweet.',
	'Challenges are what make life interesting, and overcoming them is what makes life meaningful.',
	'The only way to do great work is to love what you do.',
];

const reactionData = [
	'I completely agree!',
	'Interesting perspective.',
	"Wow, that's insightful!",
	"I couldn't have said it better myself.",
	'Thanks for sharing your thoughts!',
	"I'm not sure I agree with that.",
	'Can you elaborate on that point?',
	"I'm on the fence about this.",
	"I see what you're getting at.",
	"Let's discuss this further.",
];

// getRandomArrItem
const getRandomArrItem = (arr) => {
	return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomArrItems = (arr) => {
	const n = Math.floor(Math.random() * arr.length);
	const newArr = [];
	for (let i = 0; i < n; i++) {
		newArr.push(getRandomArrItem(arr));
	}
	return newArr;
};

const getRandomUsername = () => {
	return getRandomArrItem(usernameData);
};

const getRandomUsernames = () => {
	return getRandomArrItems(usernameData);
};

const getRandomThoughts = () => {
	return getRandomArrItems(thoughtData);
};

const getRandomReactions = () => {
	return getRandomArrItems(reactionData);
};

module.exports = {
	getRandomUsername,
	getRandomThoughts,
	thoughtData,
	usernameData,
	reactionData,
	getRandomReactions,
};
