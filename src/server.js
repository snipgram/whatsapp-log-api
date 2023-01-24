import express from "express";
import "dotenv/config";
import "./config/database.js";
import router from "./routes/index.js";
import { showRaw } from "./controllers/LogController.js";
import {scheduleJob} from "node-schedule"

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(router);

// var date = new Date(2023, 0, 5, 15, 17, 0);
// var job = scheduleJob(date, function(){
//   showRaw("2023-01-04", "2023-01-04")
// });

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
