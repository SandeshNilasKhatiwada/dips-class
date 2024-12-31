const User = require('../models/User');
const Class = require('../models/Class');
const { where } = require('sequelize');

exports.create = async (classData) => {
  try {
    const created_class = await Class.create(classData);
    return created_class;
  } catch (error) {
    throw Error('Error while creating class', error);
  }
};

exports.update = async (classId, classData) => {
  try {
    const class_data = await Class.findByPk(classId);
    if (class_data) {
      const updatedData = await Class.update(classData, {
        where: { id: classId },
      });
      return updatedData;
    } else {
      throw new Error('Cannot get the class id');
    }
  } catch (error) {
    throw Error('Error while creating class', error);
  }
};
