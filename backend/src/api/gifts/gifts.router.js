const express = require('express');
const { authorize } = require('../../utils/authMiddleware');
const catchAsync = require('../../utils/catchAsync');
const { unpackGifts } = require('./gift.controller');

const giftsRouter = express.Router();

giftsRouter.put('/gifts/unpack', authorize, catchAsync(unpackGifts));

module.exports = giftsRouter;
