const { create, update } = require('../service/class.service');

exports.createClass = async (req, res) => {
  try {
    const created_class = await create(req.body);
    res.status(201).json({
      status: true,
      message: 'Class created Successfully',
      data: created_class,
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: false, message: 'Error occured while creating class' });
  }
};

exports.editClass = async (req, res) => {
  try {
    const { id } = req.params;
    const edited_class = await update(id, req.body);
    res.status(200).json({
      status: true,
      message: 'Class edited Successfully',
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: false, message: 'Error occured while updating class' });
  }
};
