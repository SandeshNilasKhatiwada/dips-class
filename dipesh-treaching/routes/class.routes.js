//Authentication and Authorzation
const express = require('express');
const {
  createClass,
  editClass,
  getAllClass,
  getByClassId,
} = require('../controller/class.controller');
const router = express.Router();

router.get('/all', getAllClass);
router.get('/:id', getByClassId);
router.post('/', createClass);
router.put('/:id', editClass);

module.exports = router;
