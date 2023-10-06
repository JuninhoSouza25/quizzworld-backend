const mongoose = require("mongoose");

const { Schema } = mongoose;

const loginScheme = new Schema({
  email:{
    type: String,
    require: true
  },
  password:{
    type: String,
    require: true
  }
});

const Login = mongoose.model("Login", loginScheme);

module.exports = {
  Login,
  loginScheme
}