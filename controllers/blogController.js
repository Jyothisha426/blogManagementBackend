const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
  const { title, content } = req.body;
  try {
    const blog = new Blog({ title, content, createdBy: req.user.id });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

