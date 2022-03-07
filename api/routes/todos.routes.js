const express = require('express');
// Controllers
const {
  getAllToDos,
  getToDoById,
  createToDo,
  updateToDoPatch,
  deleteToDo
} = require('../controllers/todos.controller');

const router = express.Router();

router.get('/', getAllToDos);

router.get('/:id', getToDoById);

router.post('/', createToDo);

router.patch('/:id', updateToDoPatch);

router.delete('/:id', deleteToDo);

// module.exports =  router ;
module.exports = { todosRouter: router };
