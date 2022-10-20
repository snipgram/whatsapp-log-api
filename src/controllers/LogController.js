import Log from "../models/Log.js";

async function create(req, res) {
  const { key } = req.body;
  const token = req.headers["x-access-token"];

  if (!key) {
    return res.status(400).send({ message: "Key can't be empty" });
  }
  const result = await Log.create({
    userId: token,
    key,
  });
  return res.send(result);
}

export default { create };
