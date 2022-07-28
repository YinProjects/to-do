'use strict';

const {
	db,
	models: { User, Todo },
} = require('../server/db');

async function seed() {
	await db.sync({ force: true });
	console.log('db synced!');

	const users = await Promise.all([
		User.create({ name: 'cody', username: 'c', password: '123' }),
		User.create({ name: 'murphy', username: 'm', password: '123' }),
	]);
	const todos = await Promise.all([
		Todo.create({
			task: 'clean dishes',
			priority: 'High',
			status: 'Completed',
			userId: 1,
		}),
		Todo.create({ task: 'clean toilet', userId: 1 }),
		Todo.create({ task: 'take out trash', priority: 'Medium', userId: 2 }),
		Todo.create({
			task: 'grocery',
			priority: 'High',
			status: 'In Progress',
			userId: 2,
		}),
	]);

	console.log(`seeded ${users.length} users`);
	console.log(`seeded successfully`);
	return {
		users: {
			cody: users[0],
			murphy: users[1],
		},
	};
}

async function runSeed() {
	console.log('seeding...');
	try {
		await seed();
	} catch (err) {
		console.error(err);
		process.exitCode = 1;
	} finally {
		console.log('closing db connection');
		await db.close();
		console.log('db connection closed');
	}
}

if (module === require.main) {
	runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
