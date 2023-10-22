const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema = new Schema({
  category: {
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
  }
}, {timestamps: true});

const Category = mongoose.model("Category", categorySchema);

module.exports = {
  Category,
  categorySchema
}