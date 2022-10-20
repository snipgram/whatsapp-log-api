import express from "express";
import LogController from "../controllers/LogController.js";
import UserController from "../controllers/UserController.js";

const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);

router.post("/create", LogController.create);

export default router;
