const express = require('express');
const { authorize } = require('../../utils.js/authMiddleware');
const catchAsync = require('../../utils.js/catchAsync');
const statsRouter = express.Router();

// statsRouter.get('/api/users/stats/flat', authorize, catchAsync(stats.controller));
