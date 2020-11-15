const { Router } = require('express');
const { updateUsersController } = require('./users.controllers');
const usersRouter = Router();
const { authorize } = require('../../utils.js/authMiddleware');

usersRouter.put('/savings-info', authorize, updateUsersController);

module.exports = usersRouter;
