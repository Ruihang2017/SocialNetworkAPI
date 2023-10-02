const username = [
	'CyberNinja',
	'StarGazer',
	'TechSavvy',
	'UrbanExplorer',
	'ZenMaster',
	'QuantumCoder',
	'SkyDiver',
	'MysticWanderer',
	'PixelPioneer',
	'NatureNomad',
	'VelvetVoyager',
	'MidnightRider',
	'NeonGlow',
	'SolarFlare',
	'VelvetThunder',
	'ShadowWalker',
	'LunaEclipse',
	'FireStorm',
	'AquaDreamer',
	'JungleJazz',
];

const thought = [
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

const reaction = [
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

const getRandomUsername = () => {
	return getRandomArrItem(username);
};

const getRandomThoughts = (n) => {
	let arr = [];
	for (let i = 0; i < n; i++) {
		arr.push(getRandomArrItem(thought));
	}
	return arr;
};

const getRandomReaction = () => {
	return getRandomArrItem(reaction);
};

module.exports = { getRandomUsername, getRandomThoughts, getRandomReaction };
