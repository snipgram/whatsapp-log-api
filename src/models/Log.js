import mongoose from "mongoose";

const { Schema, model } = mongoose;

const logSchema = new Schema({
  userId: { type: String, required: true },
  content: Schema.Types.Mixed,
});

export default model("log", logSchema);
