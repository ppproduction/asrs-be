const { Router } = require('express');
const { Employee } = require('../../repostiories/employee');
const { createEmployeeSchemaValidator, updateEmployeeSchemaValidator } = require('./validators');

const router = Router();

router.get('/', async (req, res) => {
    try {        
        const data = await Employee.getEmployeeList({limit : req.query.limit, page: req.query.page, name : req.query.name});
        res.send({ success : true, data });
    } catch (error) {
        res.status(500).send({ success : false, msg : error.message, code : error.code });
    }
})

router.get('/:id', async (req, res) => {
    try {        
        const data = await Employee.getEmployee({ _id : req.params.id });
        res.send({ success : true, data });
    } catch (error) {
        res.status(500).send({ success : false, msg : error.message, code : error.code });
    }
})

router.post('/', createEmployeeSchemaValidator, async (req, res) => {
    try {
        const data = await Employee.createEmployee({ name : req.body.name, email : req.body.email, designation : req.body.designation, phone : req.body.phone });
        res.send({ success : true, data });
    } catch (error) {
        res.status(500).send({ success : false, msg : error.message, code : error.code });
    }
})

router.patch('/:id', updateEmployeeSchemaValidator,async (req, res) => {
    try {
        const data = await Employee.updateEmployee({ _id : req.params.id, name : req.body.name, email : req.body.email, designation : req.body.designation, phone : req.body.phone });
        res.send({ success : true, data });
    } catch (error) {
        res.status(500).send({ success : false, msg : error.message, code : error.code });
    }
})

router.delete('/:id', async (req, res) => {
    try {        
        const data = await Employee.deleteEmployee({ _id : req.params.id });
        res.send({ success : true, data });
    } catch (error) {
        res.status(500).send({ success : false, msg : error.message, code : error.code });
    }
})

module.exports = router;