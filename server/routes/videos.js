import express from "express";
import {
  addVideo,
  addView,
  deleteVideo,
  getByTags,
  getVideo,
  random,
  search,
  sub,
  updateVideo,
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";
const router = express.Router();
// add a video
router.post("/", verifyToken, addVideo);

// update a video
router.put("/:id", verifyToken, updateVideo);

//delete a video
router.delete("/:id", verifyToken, deleteVideo);

//get a video
router.get("/find/:id", verifyToken, getVideo);

router.put("/view/:id", addView);
router.get("/trend", addVideo);
router.get("/random", random);
router.get("/sub", verifyToken, sub);
router.get("/tag", getByTags);
router.get("/search", search);
export default router;
