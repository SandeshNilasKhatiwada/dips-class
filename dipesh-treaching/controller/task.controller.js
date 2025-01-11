const { unlink } = require('fs-extra');
const {
  create,
  update,
  getById,
  getAllTAsk,
} = require('../service/task.service');
const { deleteFile } = require('../config/deletefile');

exports.createTask = async (req, res) => {
  try {
    req.body.files = process.env.BASE_URL + req.file.path;
    const newTask = await create(req.body);
    res.status(201).json({
      status: true,
      message: 'Created tasks successfully',
      data: newTask,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, message: 'cannot create task' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const found_task = await getById(id);

    if (req.file) {
      req.body.files = process.env.BASE_URL + req.file.path;
      if (found_task.files != null) {
        const fileName = found_task.files.replace(
          'http://localhost:4000/api/uploads/',
          '',
        );
        deleteFile(fileName);
      }
    }
    await update(id, req.body);

    res.status(200).json({
      status: true,
      message: 'Updated tasks successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, message: 'cannot create task' });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const allTask = await getAllTAsk();
    res.status(200).json({
      status: true,
      message: 'Fetched task successfully',
      data: allTask,
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: false, message: 'cannot fetch task', error: error });
  }
};
exports.getByTaskId = async (req, res) => {
  try {
    const { id } = req.params;
    const allTask = await getById(id);
    res.status(200).json({
      status: true,
      message: 'Fetched task successfully',
      data: allTask,
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: false, message: 'cannot fetch task', error: error });
  }
};
