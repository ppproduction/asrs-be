const { Router } = require('express');
const EmployeeRouter = require('./employee');
const router = Router();

router.use('/employee', EmployeeRouter);

module.exports = router;