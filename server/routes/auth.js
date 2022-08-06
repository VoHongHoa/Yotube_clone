import express from "express";
import { signin, signup } from "../controllers/auth.js";
const router = express.Router();

//Create a user
router.post("/sign-up", signup);
//sign in
router.post("/sign-in", signin);
//google auth
router.post("/google");

export default router;
