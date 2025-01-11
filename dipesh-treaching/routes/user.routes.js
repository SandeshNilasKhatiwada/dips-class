const express = require('express');
const router = express.Router();

const {
  createUser,
  updateUser,
  getPendingUsers,
  getAllUsers,
  getUserById,
} = require('../controller/user.controller');
const { authChecker } = require('../middlewares/auth.checker.middleware');
const { role_checker } = require('../middlewares/role.checker.middleware');

router.get('/pending', getPendingUsers);
router.get('/all', getAllUsers);
router.get('/:id', getUserById);

router.post('/create', createUser);

router.put('/:id', updateUser);

module.exports = router;
