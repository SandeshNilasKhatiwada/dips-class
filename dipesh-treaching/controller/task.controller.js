const {
  createNewTask,
  getTasksBySupervisor,
  getTaskWithSubmissions,
  updateExistingTask,
  deleteTaskById,
} = require('../service/task.service');

// Create a new task and assign multiple students
exports.createTask = async (req, res) => {
  try {
    const taskData = req.body;
    const newTask = await createNewTask(taskData, taskData.students); // Pass studentIds as an array
    res.status(201).json(newTask);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// Get all tasks for a supervisor
exports.getAllTasks = async (req, res) => {
  try {
    const supervisorId = req.user.id;
    const tasks = await getTasksBySupervisor(supervisorId);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single task with its submissions
exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await getTaskWithSubmissions(id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a task (optional)
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedTask = await updateExistingTask(id, updateData);
    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a task (optional)
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await deleteTaskById(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
