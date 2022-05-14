const { EmployeeModel } = require("../../models/mongodb/employee");

class Employee {

    static async createEmployee({ name, email, designation, phone }) {
        const result = await EmployeeModel.create({ name, email, designation, phone });     
        console.log(result);  
        return result;
    }

    static async getEmployee({ _id }) {
        const result = await EmployeeModel.findOne( { _id } );
        return result;
    }

    static async getEmployeeList({ page, limit, email, name, designation, phone }) {
        const query = {
            name: name ? { $regex: new RegExp(name, 'i') } : undefined,
            email: email ? { $regex: new RegExp(email, 'i') } : undefined,
            designation: designation ? { $regex: new RegExp(designation, 'i') } : undefined,
            phone: phone ? { $regex: new RegExp(phone, 'i') } : undefined
        }
        Object.keys(query).forEach(key => query[key] === undefined && delete query[key]);
        const count = await EmployeeModel.countDocuments(query);
        const result = await EmployeeModel.find(query).limit(limit || 10).skip((page || 0) * (limit || 10));
        return { count, employees : result };
    }

    static async updateEmployee({ _id, name, email, designation, phone }) {
        const updateData = { name, email, designation, phone };
        Object.keys(updateData).forEach(key => updateData[key] === undefined && delete updateData[key]);
        console.log(updateData, _id);
        const result = await EmployeeModel.updateOne({ _id }, updateData);
        return result;
    }

    static async deleteEmployee({ _id }) {
        const result = await EmployeeModel.deleteOne({ _id });
        return result
    }
}

module.exports = { Employee };