const mongoose = require("mongoose");

const { Schema } = mongoose;

const questionSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    maxItems: 5,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  countRight: Number,
  countWrong: Number
}, {timestamps: true});

const Question = mongoose.model("Question", questionSchema);

module.exports = {
  Question,
  questionSchema
}