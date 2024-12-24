const express = require('express');
const router = express.Router();

const { createUser, updateUser } = require('../controller/user.controller');

router.post('/create', createUser);

router.put('/:id', updateUser);

module.exports = router;
