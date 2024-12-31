//Authentication and Authorzation
const express = require('express');
const { createClass, editClass } = require('../controller/class.controller');
const router = express.Router();

router.post('/', createClass);
router.put('/:id', editClass);

module.exports = router;
