const mongoose = require("mongoose");

const { Schema } = mongoose;

const levelScheme = new Schema({
  level: {
    type: String,
    required: true
  },
  points: {
    type: Number,
    required: true
  }
}, {timestamps: true});

const Level = mongoose.model("Level", levelScheme);

module.exports = {
  Level,
  levelScheme
}