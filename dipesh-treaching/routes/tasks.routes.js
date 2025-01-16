const express = require('express');
const router = express.Router();
const {
  createTask,
  updateTask,
  getAllTasks,
  getByTaskId,
  getAllTasksByUser,
} = require('../controller/task.controller');
const upload = require('../config/multer');

// Create a new task and assign multiple students

router.get('/all', getAllTasks);
router.get('/:id', getByTaskId);
router.get('/user/:userId', getAllTasksByUser);

router.post('/', upload, createTask);
router.put('/:id', upload, updateTask);

module.exports = router;
