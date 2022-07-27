const router = require('express').Router();
const {
	models: { User },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
	try {
		const users = await User.findAll({
			attributes: ['id', 'username'],
		});
		res.json(users);
	} catch (err) {
		next(err);
	}
});

router.post('/user', async (req, res, next) => {
	try {
		const user = await User.findOne({
			where: {
				username: req.body.username,
			},
			attributes: ['id', 'username'],
		});

		if (!user || user.password !== req.body.password) {
			const error = Error('Incorrect username/password');
			error.status = 401;
			throw error;
		}

		res.json(user);
	} catch (err) {
		next(err);
	}
});
