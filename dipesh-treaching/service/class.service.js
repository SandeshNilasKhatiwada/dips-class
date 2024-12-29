const User = require('../model/User');
const Class = require('../model/Class');

exports.create = async (classData) => {
  try {
    const created_class = await Class.create(classData);
    return created_class;
  } catch (error) {
    throw Error('Error while creating class', error);
  }
};
