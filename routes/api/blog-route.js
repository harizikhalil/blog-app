const express = require("express");
const router = express.Router();

//User Controller
const {
  uploadFile,
  addPost,
  getAllPost,
} = require("../../controllers/blogController");

router.post("/uploadfiles", uploadFile);
router.post("/addPost", addPost);
router.get("/allPosts", getAllPost);
module.exports = router;
