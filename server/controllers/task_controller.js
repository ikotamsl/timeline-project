const {Task} = require('../models/models');
const errorHandler = require('../errors/errorHandler');

class taskObject {
    async createTask(req, res) {
        const {taskname} = req.body;
        const new_task = await Task.create({taskname});
        return res.json(new_task);
    }
    async deleteTask(req, res) {

    }
    async getTask(req, res) {

    }
    async getTasks(req, res) {

    }
}

module.exports = new taskObject();