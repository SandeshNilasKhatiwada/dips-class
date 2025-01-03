const Submission = require('../models/Submission');
const Task = require('../models/Task');
const User = require('../models/User');
const Class = require('../models/Class');

exports.create = async (submissionData) => {
  try {
    const taskData = await Task.findByPk(submissionData.task_id);
    const userData = await User.findByPk(submissionData.user_id, {
      include: {
        model: Class,
        through: { attributes: ['class_id'] }, // Include the 'class_id' from the join table
      },
    });

    // getting access to classid
    const classIds = userData.Classes.map(
      (classInstance) => classInstance.UserClass.class_id,
    );

    // data is in submission or not
    const condition_data = await Submission.findOne({
      where: {
        user_id: submissionData.user_id,
        task_id: submissionData.task_id,
      },
    });

    if (classIds[0] == taskData.class_id) {
      if (condition_data == null) {
        const createdSubmission = await Submission.create(submissionData);
        return createdSubmission;
      }
      throw Error('Error already submitted');
    }
    throw Error('Error unauthorized access');
  } catch (error) {
    console.log(error);
    throw Error('Error while creating submission', error);
  }
};

exports.update = async (submissionData, submissionId) => {
  try {
    const taskData = await Task.findByPk(submissionData.task_id);
    const userData = await User.findByPk(submissionData.user_id, {
      include: {
        model: Class,
        through: { attributes: ['class_id'] }, // Include the 'class_id' from the join table
      },
    });

    // getting access to classid
    const classIds = userData.Classes.map(
      (classInstance) => classInstance.UserClass.class_id,
    );

    // data is in submission or not
    const condition_data = await Submission.findOne({
      where: {
        user_id: submissionData.user_id,
        task_id: submissionData.task_id,
      },
    });

    if (classIds[0] == taskData.class_id) {
      if (condition_data == null) {
        throw Error('Error Cannot find submission');
      } else {
        const updatedData = Submission.update(submissionData, {
          where: { id: submissionId },
        });
        return updatedData;
      }
    }
    throw Error('Error unauthorized access');
  } catch (error) {
    console.log(error);
    throw Error('Error while Updating submission', error);
  }
};
