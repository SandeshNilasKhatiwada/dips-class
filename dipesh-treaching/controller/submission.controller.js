const { create, update } = require('../service/submission.service');

exports.createSubmission = async (req, res) => {
  try {
    const { body } = req;

    const createSubmission = await create(body);
    res.status(201).json({
      status: true,
      message: 'Created submission successfully ',
      data: createSubmission,
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: false, message: 'Error while creating the data' });
  }
};

exports.updateSubmission = async (req, res) => {
  try {
    const { id } = req.params;
    const submissionData = req.body;
    const updated = await update(submissionData, id);
    res.status(201).json({
      status: true,
      message: 'Updated submission successfully ',
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: false, message: 'Error while updating the data' });
  }
};
