const router = require("express").Router();
const {
  models: { User,Todo },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:token", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.params.token,
      },
			include: [Todo],
			attributes: ["id", "name", "username"]
    });
		res.send(user)
  } catch (error) {
    next(error);
  }
});

router.post("/user", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!user || user.password !== req.body.password) {
      const error = Error("Incorrect username/password");
      error.status = 401;
      throw error;
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.post("/addUser", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.send(user);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(error);
    }
  }
});
