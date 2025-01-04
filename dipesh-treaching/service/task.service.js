const Task = require('../models/Task');

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
