const mongoose = require("mongoose")

async function main(){


  try {
    
    await mongoose.connect(
     `mongodb+srv://juninhosouza:6MJYz9okB7B3YwTJ@cluster0.0xndlol.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`
    )

    console.log("Conectado ao banco")

  } catch (error) {
    console.log(error)
  }

}

module.exports =  main