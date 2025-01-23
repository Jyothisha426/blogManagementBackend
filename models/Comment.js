const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Comment', CommentSchema);
