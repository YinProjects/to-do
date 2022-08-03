const router = require('express').Router()

const {
  models: {Todo}
} = require ('../db')
module.exports = router

// api/todos/id
router.get('/:id', async (req, res, next) => {
  try {
    const todos = await Todo.findAll({
      where:{
        userId: req.params.id
      }
    })
    res.json(todos)
  } catch (error) {
    next(error)
  }
})
