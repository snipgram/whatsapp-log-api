import express from "express";
import "dotenv/config";
import "./config/database.js";
import router from "./routes/index.js";
// import { scheduleJob } from "node-schedule";
// import { showRaw } from "./controllers/LogController.js";
// import date from 'date-and-time';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(router);

// const now = new Date();
// const yesterday = date.format(now, 'HH');
// scheduleJob("* * /1 * *", async () => showRaw(yesterday, yesterday));

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
