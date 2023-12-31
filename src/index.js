const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.use(express.json())
app.use(express.static('uploads'))

// DB connection
const conn = require("../db/conn")
conn();

// Routes

const routes = require("../routes/router")

app.use("/api", routes)


app.listen(process.env.PORT, function() {
  console.log("Servidor Online")
})