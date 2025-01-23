const express = require('express');
const { createBlog } = require('../controllers/blogController');
const { protect } = require('../middlewares/authMiddleware');
const { authorizeRoles } = require('../middlewares/roleMiddleware');
const router = express.Router();

router.post('/blogs', protect, authorizeRoles('Admin'), createBlog);

module.exports = router;
