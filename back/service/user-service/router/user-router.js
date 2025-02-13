import UserController from "../controller/user-controller.js";
import express from "express";
const router = express.Router();
const user = new UserController();


router.post("/login", (req, res)=> user.login(req, res));
router.post("/register", (req, res)=> user.register(req, res));












export default router