const Sequelize = require('sequelize');
const db = require('../db');

const Todo = db.define('todo', {
	task: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	priority: {
		type: Sequelize.ENUM('High', 'Medium', 'Low'),
		defaultValue: 'Low',
	},
	status: {
		type: Sequelize.ENUM('Completed', 'In Progress', 'Not Started'),
		defaultValue: 'Not Started',
	},
});

module.exports = Todo;
