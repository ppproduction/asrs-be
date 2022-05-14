const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name : { type : String, required : true },
    email : { type : String, required : true, unique : true },
    phone : { type : String, required : true, unique : true },
    designation : { type : String, required : true },
});

module.exports = {
    EmployeeModel : mongoose.model('employee', employeeSchema, 'employee')
};