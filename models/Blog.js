const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  writer: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("blog", BlogSchema);
