const express = require('express');
const router = express.Router();

const {
  createUser,
  updateUser,
  getPendingUsers,
} = require('../controller/user.controller');

router.post('/create', createUser);

router.put('/:id', updateUser);

router.get('/pending', getPendingUsers);

module.exports = router;
