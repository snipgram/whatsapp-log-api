import mongoose from "mongoose";

const { MDB_URI } = process.env;

if (!MDB_URI) {
  console.log("Please provide MDB_URI");
  process.exit();
}
mongoose.connect(MDB_URI).then(() => {
  console.log("MDB Connected Successfully");
});
