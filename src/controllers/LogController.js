import Log from "../models/Log.js";

async function create(req, res) {
  const newLog = req.body;

  if (!Object.keys(newLog).length) {
    return res.status(400).send("req.body can't be empty");
  }
  const result = await Log.create(newLog);
  return res.send(result);
}

export default { create };
