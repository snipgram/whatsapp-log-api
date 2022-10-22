import Log from "../models/Log.js";

async function create(req, res) {
  const token = req.headers["x-access-token"];

  if (!req.body) {
    return res.status(400).send({ message: "Body can't be empty" });
  }
  const result = await Log.create({
    userId: token,
    content: req.body,
  });
  return res.send(result);
}

async function show(req, res) {
  const token = req.headers["x-access-token"];
  
  Log.find({userId: token}, function(err, obj) {
    return res.send(obj);
  })
}

export default { create, show };
