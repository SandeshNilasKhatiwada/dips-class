const express = require('express');
const { createSubmission } = require('../controller/submission.controller');
const router = express.Router();

router.post('/', createSubmission);

module.exports = router;
