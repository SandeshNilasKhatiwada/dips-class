//Authentication and Authorzation
const express = require('express');
const router = express.Router();
const { login } = require('../controller/auth.controller');

router.post('/login', login);

module.exports = router;
