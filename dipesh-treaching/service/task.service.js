const Task = require('../model/Task');
const User = require('../model/User');
const TaskStudent = require('../model/taskStudent.model');

// Create a new task and assign students to it
exports.createNewTask = async (taskData, studentIds) => {
  try {
    // Create the task
    const newTask = await Task.create(taskData);
    console.log(Object.keys(newTask.__proto__));

    // Assign students to the task (many-to-many relationship)
    // if (studentIds && studentIds.length > 0) {
    //   await newTask.addStudents(studentIds); // Sequelize's auto-handling for many-to-many
    // }

    // return newTask;
  } catch (error) {
    throw new Error('Error creating task: ' + error.message);
  }
};

// Get all tasks created by a supervisor
exports.getTasksBySupervisor = async (supervisorId) => {
  try {
    const tasks = await Task.findAll({
      where: { supervisorId },
      include: [
        {
          model: User,
          as: 'supervisor',
          attributes: ['id', 'username', 'role'],
        },
        {
          model: User,
          as: 'students', // Include students assigned to the task
          attributes: ['id', 'username'],
        },
      ],
    });
    return tasks;
  } catch (error) {
    throw new Error('Error fetching tasks: ' + error.message);
  }
};

// Get a task by ID, including its submissions and students
exports.getTaskWithSubmissions = async (taskId) => {
  try {
    const task = await Task.findOne({
      where: { id: taskId },
      include: [
        {
          model: User,
          as: 'supervisor',
          attributes: ['id', 'username'],
        },
        {
          model: User,
          as: 'students', // Include students assigned to the task
          attributes: ['id', 'username'],
        },
        {
          model: Submission,
          as: 'submissions',
          include: [
            {
              model: User,
              as: 'student',
              attributes: ['id', 'username'],
            },
          ],
        },
      ],
    });
    return task;
  } catch (error) {
    throw new Error('Error fetching task with submissions: ' + error.message);
  }
};

// Update a task
exports.updateExistingTask = async (taskId, updateData) => {
  try {
    const task = await Task.findByPk(taskId);
    if (!task) throw new Error('Task not found');
    await task.update(updateData);
    return task;
  } catch (error) {
    throw new Error('Error updating task: ' + error.message);
  }
};

// Delete a task
exports.deleteTaskById = async (taskId) => {
  try {
    const task = await Task.findByPk(taskId);
    if (!task) return false;
    await task.destroy();
    return true;
  } catch (error) {
    throw new Error('Error deleting task: ' + error.message);
  }
};
