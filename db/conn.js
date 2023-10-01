const mongoose = require("mongoose")
require('dotenv').config();

async function main(){

  const USER = process.env.DB_NAME
  const PASSWORD = process.env.DB_PASSWORD

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