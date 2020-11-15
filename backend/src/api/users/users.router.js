const { Router } = require('express');
const { updateUsersController } = require('./users.controllers');
const usersRouter = Router();
const { authorize } = require('../../utils.js/authMiddleware');
const { userValidationMiddleware } = require('./users.middleware');

usersRouter.put(
  '/savings-info',
  authorize,
  userValidationMiddleware,
  updateUsersController,
);

module.exports = usersRouter;
