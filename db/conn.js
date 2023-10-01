const mongoose = require("mongoose")
require('dotenv').config();

async function main(){

  const USER = "juninhosouza"
  const PASSWORD = "6MJYz9okB7B3YwTJ"

  try {
    
    await mongoose.connect(
     `mongodb+srv://${USER}:${PASSWORD}@cluster0.0xndlol.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`
    )

    console.log("Conectado ao banco")

  } catch (error) {
    console.log(error)
  }

}

module.exports =  main