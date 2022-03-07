const express = require('express');
var cors = require('cors');

//Routers
const { todosRouter } = require('./routes/todos.routes');

//utils
const { sequelize } = require('./util/database');

// Create server Express
const app = express();

//cors
app.use(cors());

//Enable Json incomming data
app.use(express.json());

//EndPoint
app.use('/api/v1/toDo', todosRouter);


sequelize
  .authenticate()
  .then(() => console.log('Database authenticate'))
  .catch((err) => console.log(err));

sequelize
  .sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.log(err));

app.listen(4000, () => {
  console.log('Express app runnin');
});

// Define endpoint for ToDos
// GET fetch all ToDos
// POST Create new ToDo
// PATCH Update ToDo given an ID
// DELETE Delete ToDo given an ID (destroy or soft delete)

// Establish a connection with a Database (Postgress)

// Create ToDo model
// Use the model to interact with the controller functions

// Must structure project with routes, controllers and models folders (utils)

// IMPORTANT: Prettier format

// Install cors library (npm i cors)
// app.use(cors())
