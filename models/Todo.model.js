const mongoose = require('mongoose');

const todosShema = mongoose.Schema({
    text: String,
    completed: {
        type: Boolean,
        default: false      
    }
 
    
}); 

const Todos = mongoose.model('Todos', todosShema);

module.exports = Todos; 