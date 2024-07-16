const Blog = require("../models/blog.model");

const blogController = {
  getAllBlogs: async (req, res) => {
    try {
      const blogs = await Blog.find();
      res.status(200).json({ blogs: blogs });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  getBlog: async (req, res) => {
    try {
      const { id } = req.params;
      const blog = await Blog.findById(id);
      res.status(200).json({ blog: blog });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
  postBlog: async (req, res) => {
    try {
      const { author, category, title, description, content } = req.body;
      const image = req.file.filename;
      const blog = await Blog.create({
        author: author,
        category: category,
        title: title,
        description: description,
        content: content,
        image: image,
      });

      res.status(201).json({ message: "Blog Created", blog: blog });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  },
};

module.exports = blogController;
