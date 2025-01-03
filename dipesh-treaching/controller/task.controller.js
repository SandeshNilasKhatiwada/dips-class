const { create, update } = require('../service/task.service');

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
    const updatedTask = await update(id, req.body);
    res.status(200).json({
      status: true,
      message: 'Updated tasks successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, message: 'cannot create task' });
  }
};
