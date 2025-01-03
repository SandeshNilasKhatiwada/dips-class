const express = require('express');
const router = express.Router();
const { createTask, updateTask } = require('../controller/task.controller');
const upload = require('../config/multer');

// Create a new task and assign multiple students
router.post('/', upload, createTask);
router.put('/:id', upload, updateTask);

module.exports = router;
