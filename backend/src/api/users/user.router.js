const { Router } = require('express');
const { authorize, catchAsync } = require('../../utils.js');
const { getCurrentUser } = require('./user.controller');

const router = Router();

router.get('/current', catchAsync(authorize), getCurrentUser);

module.exports = router;
