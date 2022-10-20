import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const key = process.env.BCRYPT_KEY;

if (!key) {
  console.log("Please provide BCRYPT_KEY");
  process.exit();
}
async function register(req, res) {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).send({ message: "Please provide name and password" });
  }
  const userAlreadyExist = await User.findOne({ name });

  if (userAlreadyExist) {
    return res.status(400).send({ message: "User already exist" });
  }
  const newUser = await User.create({
    name,
    password: await bcrypt.hash(password, 10),
  });
  const result = newUser.toObject();
  result.token = jwt.sign({ name, password }, key);

  return res.send(result);
}

async function login(req, res) {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).send({ message: "Please provide name and password" });
  }
  const user = await User.findOne({ name });

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }
  const passwordIsMatch = await bcrypt.compare(password, user.password);

  if (!passwordIsMatch) {
    return res.status(400).send({ message: "Wrong password" });
  }
  const result = user.toObject();
  result.token = jwt.sign({ name, password }, key);

  return res.send(result);
}

export default { register, login };
