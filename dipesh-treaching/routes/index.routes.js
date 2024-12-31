const express = require('express');
const router = express.Router();
const userRouter = require('./user.routes');
const authRouter = require('./auth.routes');
const taskRouter = require('./tasks.routes');
const classRouter = require('./class.routes');
const submissionRouter = require('./submission.routes');

router.use('/users', userRouter);

router.use('/auth', authRouter);
router.use('/task', taskRouter);
router.use('/class', classRouter);
router.use('/submission', submissionRouter);

module.exports = router;
