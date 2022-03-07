const express = require('express');
// Controllers
const {
  getToDos
  // getToDoById,
  // createToDo,
  // updateToDoPatch
  //   deleteToDo
} = require('../controllers/toDo.controller');

const router = express.Router();

router.get('/', getToDos);

// router.get('/:id', getToDoById);

// router.get('/', createToDo);

// router.patch('/', updateToDoPatch);

// router.delete('/:id', deleteToDo);

module.exports = { router: router };
