const Sequelize = require('sequelize')
const db = require('../db')


const User = db.define('user', {
  name: {
    type:Sequelize.STRING,
    allowNull:false
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = User
