import express from "express";
import "dotenv/config";
import "./config/database.js";
import router from "./routes/index.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
