import mongoose from "mongoose";

const { Schema, model } = mongoose;

const logSchema = new Schema({
  userId: { type: String, required: true },
  content: Schema.Types.Mixed,
  timestamp: { type: String, required: true },
});

export default model("log", logSchema);
