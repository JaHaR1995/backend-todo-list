const { Router} = require('express')  
const {todoController}  = require("../constrollers/todo.controller")   

const router = Router() 

router.post("/todo", todoController.addTodo); 
router.patch("/todo/:id", todoController.editTodoById); 
router.get("/todo",todoController.getTodo); 
router.delete("/todo/:id", todoController.deleteTodoById)    


module.exports  = router 