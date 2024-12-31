const express = require('express');
const router = express.Router();
const { createTask, updateTask } = require('../controller/task.controller');

// Create a new task and assign multiple students
router.post('/', createTask);
router.put('/:id', updateTask);

module.exports = router;
