import Log from "../models/Log.js";
import jwt from "jsonwebtoken";
import date from 'date-and-time';

async function create(req, res) {
  const token = req.headers["x-access-token"];

  if (!req.body) {
    return res.status(400).send({ message: "Body can't be empty" });
  }

  const user = jwt.verify(token, process.env.BCRYPT_KEY);

  const result = await Log.create({
    userId: user.iat,
    content: req.body,
    timestamp: Date.now()
  });
  return res.send(result);
}

async function show(req, res) {
  const { start_date, end_date } = req.body

  const token = req.headers["x-access-token"];

  const user = jwt.verify(token, process.env.BCRYPT_KEY);
  
  var start_date_timestamp = (new Date(start_date)).getTime();
  var add_days = date.addDays(new Date(end_date), 1);
  var end_date_timestamp = (add_days).getTime();

  Log.find({
    userId: user.iat,
    timestamp: {
      $gte: start_date_timestamp,
      $lt: end_date_timestamp
    }
  }, function(err, obj) {
    return res.send(obj);
  })
}

export default { create, show };
