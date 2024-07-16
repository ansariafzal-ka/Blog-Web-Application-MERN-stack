const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blog.controller");
const upload = require("../middleware/multer");

router.post("/", upload.single("image"), blogController.postBlog);
router.get("/", blogController.getAllBlogs);
router.get("/:id", blogController.getBlog);

module.exports = router;
