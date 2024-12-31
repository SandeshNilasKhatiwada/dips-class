const { create } = require('../service/submission.service');
const Task = require('../models/Task');
const User = require('../models/User');

exports.createSubmission = async (req, res) => {
  try {
    const { body } = req;
    const taskData = await Task.findByPk(body.task_id);
    const userData = await User.findByPk(body.user_id);

    if (userData.class_id == taskData.class_id) {
      const createSubmission = await create(body);
      res
        .status(201)
        .json({
          status: true,
          message: 'Created submission successfully ',
          data: createSubmission,
        });
    } else {
      res.status(403).json({
        status: false,
        message: 'Error while creating the data Unauthorized Submission',
      });
    }
  } catch (error) {
    res
      .status(400)
      .json({ status: false, message: 'Error while creating the data' });
  }
};
