import express from "express";
import { body, query } from 'express-validator'
import LogController from "../controllers/LogController.js";
import UserController from "../controllers/UserController.js";
import auth from "../middleware/auth.js";
import requestValidator from './../middleware/requestValidator.js'
import rangeDateValidator from './../middleware/rangeDateValidator.js'

const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);

router.post("/create", auth, LogController.create);
router.get("/show", 
    body('start_date').notEmpty(),
    body('end_date').notEmpty(),
    requestValidator, 
    rangeDateValidator,
    auth, 
    LogController.show);

router.get("/destroy", 
    body('start_date').notEmpty(),
    body('end_date').notEmpty(),
    requestValidator, 
    rangeDateValidator,
    auth, 
    LogController.destroy);

router.get("/show-raw", 
    body('start_date').notEmpty(),
    body('end_date').notEmpty(),
    requestValidator, 
    rangeDateValidator,
    auth, 
    LogController.showRaw);

export default router;
