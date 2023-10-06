const mongoose = require("mongoose");

const { Schema } = mongoose;

const userScheme = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: false
  },
  birthday: {
    type: String,
    required: false
  },
  phone: {
    type: Number,
    required: false
  }
}, {timestamps: true});

const User = mongoose.model("User", userScheme);

module.exports = {
  User,
  userScheme
}