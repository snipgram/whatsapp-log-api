import jwt from "jsonwebtoken";

async function auth(req, res, next) {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(400).send({ message: "A token is required for authentication" });
  }
  try {
    jwt.verify(token, process.env.BCRYPT_KEY);
  } catch (err) {
    return res.status(401).send({ message: "Invalid token" });
  }
  next();
}

export default auth;
