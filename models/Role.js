const mongoose = require("mongoose");

const { Schema } = mongoose;

const roleSchema = new Schema({
  role: {
    type: String,
    required: true
  }
}, {timestamps: true});

const Role = mongoose.model("Role", roleSchema);

module.exports = {
  Role,
  roleSchema
}