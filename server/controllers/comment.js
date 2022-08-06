import { createError } from "../error.js";
import Comment from "../models/Comment.js";
import Video from "../models/Video.js";
export const addComment = async (req, res, next) => {
  const newComment = new Comment({ ...req.body, userId: req.user.id });
  try {
    const saveComment = await newComment.save();
    return res.status(200).json(saveComment);
  } catch (err) {
    next(err);
  }
};
export const updateComment = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    const video = await Video.findById(req.params.videoId);
    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await Comment.findByIdAndDelete(req.params.id);
      return res.status(200).json("The comment has been deleted.");
    } else {
      return next(createError(403, "You can't delete this comment."));
    }
  } catch (err) {
    next(err);
  }
};
export const getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId });
    return res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};
