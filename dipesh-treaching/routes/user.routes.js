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

router.put('/:id', authChecker, role_checker(['admin']), updateUser);

router.get('/pending', authChecker, role_checker(['admin']), getPendingUsers);

module.exports = router;
