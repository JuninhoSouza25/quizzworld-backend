const mongoose = require("mongoose")
require('dotenv').config();

async function main(){

  const DBURL = process.env.MONGODB_URI 

  try {
    
    await mongoose.connect(
     DBURL
    )

    console.log("Conectado ao banco")

  } catch (error) {
    console.log(error)
  }

}

module.exports =  main