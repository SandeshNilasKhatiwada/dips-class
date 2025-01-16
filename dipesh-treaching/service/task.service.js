const Task = require('../models/Task');
const User = require('../models/User');
const Class = require('../models/Class');

// Create a new task and assign students to it
exports.create = async (taskData) => {
  try {
    const newTask = await Task.create(taskData);
    return newTask;
  } catch (error) {
    throw new Error('Error creating task: ' + error.message);
  }
};

exports.update = async (taskId, taskData) => {
  try {
    console.log(taskData);
    const newTask = await Task.update(taskData, { where: { id: taskId } });
    return newTask;
  } catch (error) {
    throw new Error('Error creating task: ' + error.message);
  }
};

exports.getById = async (taskId) => {
  try {
    const foundTask = await Task.findByPk(taskId);
    if (foundTask) {
      return foundTask;
    }
    throw Error('No task found');
  } catch (error) {
    throw new Error('Error creating task: ' + error.message);
  }
};

exports.getAllTAsk = async () => {
  try {
    const allTask = await Task.findAll();
    return allTask;
  } catch (error) {
    throw new Error('Error creating task: ' + error.message);
  }
};

exports.getAllTasksByUser = async (userId) => {
  const user = await User.findByPk(userId, {
    include: {
      model: Class, // Include Classes the user belongs to
      include: Task, // Include Tasks associated with those classes
    },
  });

  if (!user) {
    throw new Error('User not found');
  }

  // Flatten tasks from all classes
  const tasks = user.Classes.flatMap((classItem) => classItem.Tasks);

  return tasks;
};
