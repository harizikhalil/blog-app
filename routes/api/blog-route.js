const express = require("express");
const router = express.Router();

const {
  uploadFile,
  addPost,
  getAllPost,
  getPostById,
} = require("../../controllers/blogController");

router.post("/uploadfiles", uploadFile);
router.post("/addPost", addPost);
router.get("/allPosts", getAllPost);
router.get("/getpost/:idPost", getPostById);
module.exports = router;
