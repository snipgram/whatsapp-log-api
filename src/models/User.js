import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default model("user", userSchema);
