const mongoose = require("mongoose");

const { Schema } = mongoose;

const quizSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  questions: {
    type: [String],
    maxItems: 10,
    required: false
  },
  theme: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  image: {
    type: String,
  }
}, {timestamps: true});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = {
  Quiz,
  quizSchema
}