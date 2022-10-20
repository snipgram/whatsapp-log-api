import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: String, unique: true },
  password: String,
});

export default model("user", userSchema);
