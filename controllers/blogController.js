const Blog = require("../models/Blog");
const multer = require("multer");
// STORAGE MULTER CONFIG
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".png") {
      return cb(res.status(400).end("only jpg, png  is allowed"), false);
    }
    cb(null, true);
  },
});

const upload = multer({ storage: storage }).single("file");
module.exports = blogController = {
  uploadFile: async (req, res) => {
    upload(req, res, (err) => {
      if (err) {
        return res.json({ success: false, err });
      }
      return res.json({
        success: true,
        url: res.req.file.path,
        fileName: res.req.file.filename,
      });
    });
  },
  addPost: async (req, res) => {
    const { title, description, content, writer } = req.body;
    try {
      let blog = new Blog({
        title,
        description,
        content,
        writer,
      });
      await blog.save();
      res.send(blog);
      //console.log(req.file)
    } catch (error) {
      console.log(error);
      res.status(500).send([{ msg: "Server error" }]);
    }
  },
  getAllPost: (req, res) => {
    Blog.find()
      .populate("writer")
      .exec((err, blogs) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({ success: true, blogs });
      });
  },
  getPostById: async (req, res) => {
    const { idPost } = req.params;
    try {
      const post = await Blog.findById(idPost).populate("writer");
      if (!post) {
        return res.status(404).json({ msg: "post not found" });
      }

      res.send({ post });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
};
