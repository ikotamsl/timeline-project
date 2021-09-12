const {Task} = require('../models/models');
const errorHandler = require('../errors/errorHandler');

class taskObject {

    // Создаём новое задание и помещаем его в базу

    async createTask(req, res, next) {
        try{
            const {taskname, begindate, enddate, collid} = req.body;
            const new_task = await Task.create({taskname, begindate, enddate, collid});
            return res.json(new_task);
        } catch (e) {
            return next(errorHandler.badRequest(e.message));
        }
    }
    async deleteTask(req, res) {

    }
    async getTask(req, res) {

    }

    // Получаем все имеющиеся задания

    async getTasks(req, res) {
        const tasks = await Task.findAll();
        return res.json(tasks);
    }
}

module.exports = new taskObject();