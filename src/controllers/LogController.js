import Log from "../models/Log.js";
import jwt from "jsonwebtoken";

async function create(req, res) {
  const token = req.headers["x-access-token"];

  if (!req.body) {
    return res.status(400).send({ message: "Body can't be empty" });
  }

  const user = jwt.verify(token, process.env.BCRYPT_KEY);

  const result = await Log.create({
    userId: user.iat,
    content: req.body,
  });
  return res.send(result);
}

async function show(req, res) {
  const token = req.headers["x-access-token"];

  const user = jwt.verify(token, process.env.BCRYPT_KEY);

  Log.find({userId: user.iat}, function(err, obj) {
    return res.send(obj);
  })
}

export default { create, show };
