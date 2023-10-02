const mongoose = require("mongoose");

const { Schema } = mongoose;

const themeSchema = new Schema({
  theme: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  countRight: Number,
  countWrong: Number
}, {timestamps: true});

const Theme = mongoose.model("Theme", themeSchema);

module.exports = {
  Theme,
  themeSchema
}