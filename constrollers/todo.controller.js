const Todo = require("../models/Todo.model");

module.exports.todoController = {
  addTodo: async (req, res) => {
    try {
      const todos = await Todo.create({           
        text: req.body.text,
        completed: req.body.completed,
      });
      res.json(todos);
    } catch (error) {
      console.log(error);
    }
  },

  getTodo: async (req, res) => {
    try {
      const todos = await Todo.find();       
      res.json(todos);
    } catch (error) {
      console.log(error);
    }
  },

  editTodoById: async (req, res) => {
    try {
      const todos = await Todo.findByIdAndUpdate(req.params.id, {
        completed: req.body.completed,               
      });
      res.json(todos);
    } catch (error) {
      console.log(error);          
    }
  },

  deleteTodoById: async (req, res) => {
    try {
      const todos = await Todo.findByIdAndDelete(req.params.id);
      res.json(todos);
    } catch (error) {
      console.log(error);
    }
  },
};
