const router = require('express').Router();

const {
	models: { Todo, User },
} = require('../db');
module.exports = router;

// api/todos/id
router.get('/:id', async (req, res, next) => {
	try {
		const todos = await Todo.findAll({
			where: {
				userId: req.params.id,
			},
		});
		res.json(todos);
	} catch (error) {
		next(error);
	}
});

// api/todos
router.post('/', async (req, res, next) => {
	try {
		const todo = await Todo.create(req.body);
		res.json(todo);
	} catch (error) {
		next(error);
	}
});
