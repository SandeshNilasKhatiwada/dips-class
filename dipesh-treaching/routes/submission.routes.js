const express = require('express');
const upload = require('../config/multer');
const {
  createSubmission,
  updateSubmission,
} = require('../controller/submission.controller');
const router = express.Router();

router.post('/', upload, createSubmission);
router.put('/:id', upload, updateSubmission);

module.exports = router;
