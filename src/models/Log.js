import mongoose from "mongoose";

const { Schema, model } = mongoose;

const logSchema = new Schema({
  userId: String,
  key: [Schema.Types.Mixed],
});

export default model("log", logSchema);
