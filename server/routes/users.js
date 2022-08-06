import express from "express";
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subcribe,
  unsubcribe,
  updateUser,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";
const router = express.Router();
//get a user
router.get("/find/:id", getUser);

//update user
router.put("/:id", verifyToken, updateUser);

//delete user
router.delete("/:id", verifyToken, deleteUser);

//subcribe a user
router.put("/sub/:id", verifyToken, subcribe);

//unsubcribe a user
router.put("/unsub/:id", verifyToken, unsubcribe);

//like a video
router.put("/like/:videoId", verifyToken, like);

//dislike a video
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;
