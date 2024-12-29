const express = require('express');
const router = express.Router();
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../controller/task.controller');

// Create a new task and assign multiple students
router.post('/', createTask);

// Get all tasks created by the supervisor
router.get('/', getAllTasks);

// Get a single task with its students and submissions
router.get('/:id', getTaskById);

// Update a task
router.put('/:id', updateTask);

// Delete a task
router.delete('/:id', deleteTask);

module.exports = router;
