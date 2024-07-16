const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Technology", "Politics", "Travel", "Food", "Education"],
    required: true,
  },
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
    max: 1130,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
