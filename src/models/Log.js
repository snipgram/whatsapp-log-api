import mongoose from "mongoose";

const { Schema, model } = mongoose;

const logSchema = new Schema({
  key1: String,
  key2: {
    subkey1: String,
  },
});

export default model("log", logSchema);
