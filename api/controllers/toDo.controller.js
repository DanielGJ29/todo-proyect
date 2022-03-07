const { ToDo } = require('../models/toDo.model');

// Utils
const { filterObj } = require('../util/filterObj');

exports.getAllToDos = async (req, res) => {
  try {
    const tododata = await ToDo.findAll();

    res.status(200).json({
      status: 'success',
      data: { tododata }
    });
  } catch (error) {
    console.log(error);
  }
};

// exports.getToDoById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const toDo = await ToDo.findOne({ where: { id: id, status: 'active' } });

//     if (!post) {
//       res.status(404).json({
//         status: 'error',
//         message: 'No post found with the give ID'
//       });
//     }

//     res.status(200).json({
//       status: 'success',
//       data: { toDo }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// //?save ToDo
// exports.createToDo = async (req, res) => {
//   try {
//     const { toDo } = req.body;

//     const newToDo = await ToDo.create({ toDo: toDo });

//     res.status(201).json({
//       status: 'success',
//       data: { newToDo }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// //?Update ToDo (put)
// exports.updateToDoPut = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { toDo } = req.body;

//     if (!toDo || toDo.length === 0) {
//       res.status(400).json({
//         status: 'error',
//         message: 'Must provide a toDo, content and the author for this reques'
//       });

//       return;
//     }

//     const todo = await toDo.findOne({
//       where: { id: id, status: 'active' }
//     });

//     if (!todo) {
//       res.status(404).json({
//         status: 'error',
//         message: 'Cant update toDo, invalid ID'
//       });
//       return;
//     }

//     await post.update({
//       toDo: toDo
//     });

//     res.status(204).json({ satus: 'success' });
//   } catch (error) {
//     console.log(error);
//   }
// };

// //?Update toDo (patch)
// exports.updateToDoPatch = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const data = filterIObj(req.body, toDo);

//     const toDo = await ToDo.findOne({
//       where: { id: id, status: 'active' }
//     });

//     if (!toDo) {
//       res.status(404).json({
//         status: 'error',
//         message: 'Cant update toDo, invalid ID'
//       });
//       return;
//     }

//     await toDo.update({ ...data });

//     res.status(204).json({
//       status: 'success'
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
