const express = require("express");
const morgan  = require('morgan')
require('dotenv').config(); 
const mongoose = require("mongoose");
const cors = require('cors')  

const app = express();

app.use(express.json());
app.use(cors())
app.use(require("./routes/todo.route"))     
app.use(morgan('dev'))


const {PORT, MONGO_SERVER} = process.env;        
connectAndStartServer = async () =>{
  try{
    mongoose.connect(MONGO_SERVER);
    app.listen(PORT, () =>{
      console.log(`Успешно соединились. Порт ${PORT}`);
    })
  } catch(e){
    console.log(`Ошибка при подключении: ${e.toString()}`)     
  }
}

connectAndStartServer()

module.exports = connectAndStartServer   