const express = require('express');
const router = express.Router();

const {
  createUser,
  updateUser,
  getPendingUsers,
} = require('../controller/user.controller');
const { authChecker } = require('../middlewares/auth.checker.middleware');
const { role_checker } = require('../middlewares/role.checker.middleware');

router.post('/create', createUser);

router.put('/:id', updateUser);

router.get('/pending', getPendingUsers);

module.exports = router;
