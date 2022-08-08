import { Router } from "express";
import Post from "../models/Post.js";

const router = Router();



router.post("/", async (req, res) => {
  const { author, title, content, picture } = req.body;
  const post = await Post.create({ author, title, content, picture });

  res.status(200).json("Server worked");
});

export default router;
