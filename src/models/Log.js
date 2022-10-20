import mongoose from "mongoose";

const { Schema, model } = mongoose;

const logSchema = new Schema({
  userId: { type: String, required: true },
  key: Schema.Types.Mixed,
});

export default model("log", logSchema);
