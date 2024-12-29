//Authentication and Authorzation
const express = require('express');
const { createClass } = require('../controller/class.controller');
const router = express.Router();

router.post('/', createClass);

module.exports = router;
