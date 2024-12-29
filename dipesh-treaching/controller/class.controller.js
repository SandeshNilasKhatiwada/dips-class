const { create } = require('../service/class.service');

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
