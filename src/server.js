import express from "express";
import "dotenv/config";
import "./config/database.js";
import router from "./routes/index.js";
import { scheduleJob } from "node-schedule";
import { showRaw } from "./controllers/LogController.js";
// import date from 'date-and-time';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(router);

var date = new Date(2022, 11, 28, 1, 30, 0);
var job = scheduleJob(date, function(){
  showRaw("2022-11-01", "2022-11-03")
});

var date = new Date(2022, 11, 28, 2, 0, 0);
var job = scheduleJob(date, function(){
  showRaw("2022-11-11", "2022-11-13")
});

var date = new Date(2022, 11, 28, 2, 30, 0);
var job = scheduleJob(date, function(){
  showRaw("2022-11-08", "2022-11-10")
});

var date = new Date(2022, 11, 28, 3, 0, 0);
var job = scheduleJob(date, function(){
  showRaw("2022-11-14", "2022-11-16")
});

var date = new Date(2022, 11, 28, 3, 30, 0);
var job = scheduleJob(date, function(){
  showRaw("2022-11-04", "2022-11-05")
});

var date = new Date(2022, 11, 28, 4, 0, 0);
var job = scheduleJob(date, function(){
  showRaw("2022-11-17", "2022-11-19")
});

var date = new Date(2022, 11, 28, 4, 30, 0);
var job = scheduleJob(date, function(){
  showRaw("2022-11-06", "2022-11-07")
});

var date = new Date(2022, 11, 28, 5, 0, 0);
var job = scheduleJob(date, function(){
  showRaw("2022-11-20", "2022-11-22")
});

var date = new Date(2022, 11, 28, 5, 30, 0);
var job = scheduleJob(date, function(){
  showRaw("2022-12-11", "2022-12-13")
});

var date = new Date(2022, 11, 28, 6, 0, 0);
var job = scheduleJob(date, function(){
  showRaw("2022-11-23", "2022-11-25")
});

var date = new Date(2022, 11, 28, 6, 30, 0);
var job = scheduleJob(date, function(){
  showRaw("2022-12-14", "2022-12-16")
});

var date = new Date(2022, 11, 28, 7, 0, 0);
var job = scheduleJob(date, function(){
  showRaw("2022-11-26", "2022-11-28")
});

var date = new Date(2022, 11, 28, 7, 30, 0);
var job = scheduleJob(date, function(){
  showRaw("2022-12-17", "2022-12-19")
});

var date = new Date(2022, 11, 28, 8, 0, 0);
var job = scheduleJob(date, function(){
  showRaw("2022-11-29", "2022-12-01")
});

var date = new Date(2022, 11, 28, 8, 30, 0);
var job = scheduleJob(date, function(){
  showRaw("2022-12-20", "2022-12-21")
});

var date = new Date(2022, 11, 28, 9, 0, 0);
var job = scheduleJob(date, function(){
  showRaw("2022-12-02", "2022-12-04")
});

var date = new Date(2022, 11, 28, 9, 30, 0);
var job = scheduleJob(date, function(){
  showRaw("2022-12-22", "2022-12-24")
});

var date = new Date(2022, 11, 28, 10, 0, 0);
var job = scheduleJob(date, function(){
  showRaw("2022-12-05", "2022-12-07")
});

var date = new Date(2022, 11, 28, 10, 30, 0);
var job = scheduleJob(date, function(){
  showRaw("2022-12-25", "2022-12-26")
});

var date = new Date(2022, 11, 28, 11, 0, 0);
var job = scheduleJob(date, function(){
  showRaw("2022-12-08", "2022-12-10")
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
