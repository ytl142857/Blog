import mongoose from "mongoose";

// MongoDB Schema
export const articleSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
  },
  classfication: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
  createTime: {
    type: Date,
    default: Date.now,
  },
});
