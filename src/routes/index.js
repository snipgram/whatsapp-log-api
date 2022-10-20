import express from "express";
import LogController from "../controllers/LogController.js";
import UserController from "../controllers/UserController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);

router.post("/create", auth, LogController.create);

export default router;
