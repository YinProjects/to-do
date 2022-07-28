const db = require('./db');

const User = require('./models/User');
const Todo = require('./models/Todo');

//associations could go here!

module.exports = {
	db,
	models: {
		User,
		Todo,
	},
};
