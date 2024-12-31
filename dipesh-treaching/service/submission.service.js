const Submission = require('../models/Submission');
exports.create = async (submissionData) => {
  try {
    const createdSubmission = await Submission.create(submissionData);
    return createdSubmission;
  } catch (error) {
    console.log(error);
    throw Error('Error while creating submission', error);
  }
};
