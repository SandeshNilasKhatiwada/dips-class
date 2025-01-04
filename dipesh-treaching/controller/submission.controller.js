const { deleteFile } = require('../config/deletefile');
const { create, update, getById } = require('../service/submission.service');

exports.createSubmission = async (req, res) => {
  try {
    req.body.files = process.env.BASE_URL + req.file.path;
    const createSubmission = await create(req.body);
    res.status(201).json({
      status: true,
      message: 'Created submission successfully ',
      data: createSubmission,
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: false, message: 'Error while creating Submission' });
  }
};

exports.updateSubmission = async (req, res) => {
  try {
    const { id } = req.params;
    const found_Submission = await getById(id);
    if (req.file) {
      req.body.file = process.env.BASE_URL + req.file.path;
      const fileName = found_Submission.files.replace(
        'http://localhost:4000/api/uploads/',
        '',
      );
      deleteFile(fileName);
    }
    console.body(req.body);
    const updated = await update(req.body, id);
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
