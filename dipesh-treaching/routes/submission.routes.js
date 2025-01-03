const express = require('express');
const {
  createSubmission,
  updateSubmission,
} = require('../controller/submission.controller');
const router = express.Router();

router.post('/', createSubmission);
router.put('/:id', updateSubmission);

module.exports = router;
