const { Todo } = require('../models/todos.model');

// Utils
const { filterObj } = require('../util/filterObj');

//?Get All toDo
exports.getAllToDos = async (req, res) => {
  try {
    const tododata = await Todo.findAll({ where: { status: 'active' } });

    res.status(200).json({
      status: 'success',
      data: { tododata }
    });
  } catch (error) {
    console.log(error);
  }
};

//?getById toDo
exports.getToDoById = async (req, res) => {
  try {
    const { id } = req.params;

    // SELECT * FROM posts WHERE id = 1;
    const toDo = await Todo.findOne({
      where: { id: id, status: 'active' }
    });

    if (!toDo) {
      res.status(404).json({
        status: 'error',
        message: 'No toDo found with the given ID'
      });
      return;
    }

    res.status(200).json({
      status: 'success',
      data: {
        toDo
      }
    });
  } catch (error) {
    console.log(error);
  }
};

// //?save ToDo
exports.createToDo = async (req, res) => {
  try {
    const { toDo, status } = req.body;

    const newToDo = await Todo.create({ toDo, status });

    res.status(201).json({
      status: 'success',
      data: { newToDo }
    });
  } catch (error) {
    console.log(error);
  }
};

// //?Update toDo (patch)
exports.updateToDoPatch = async (req, res) => {
  try {
    const { id } = req.params;

    const data = filterObj(req.body, 'toDo');

    const toDo = await Todo.findOne({ where: { id: id } });

    if (!toDo) {
      res.status(404).json({
        status: 'error',
        message: 'Cant update toDo, invalid ID'
      });
      return;
    }

    await toDo.update({ ...data });

    res.status(204).json({
      status: 'success'
    });
  } catch (error) {
    console.log(error);
  }
};

//? Delete toDo
exports.deleteToDo = async (req, res) => {
  try {
    const { id } = req.params;

    const todoData = await Todo.findOne({
      where: { id: id, status: 'active' }
    });

    if (!todoData) {
      res.status(404).json({
        status: 'error',
        message: 'Cant delete toDo, invalid ID'
      });
      return;
    }

    //? Soft delete
    await todoData.update({ status: 'deleted' });

    res.status(204).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};
