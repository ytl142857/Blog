import mongoose from "mongoose"


// MongoDB Schema
export const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})