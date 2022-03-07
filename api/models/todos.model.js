const { DataTypes } = require('sequelize');

//Utils
const { sequelize } = require('../util/database');

const Todo = sequelize.define('todos', {
  id: {
    primaryKey: true,
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false
  },
  toDo: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  status: {
    type: DataTypes.STRING(10),
    allowNull: false,
    defaultValue: 'active'
  }
});

module.exports = { Todo };
