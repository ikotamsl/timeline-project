const {Task} = require('../models/models');
const errorHandler = require('../errors/errorHandler');

class taskController {

    // Создаём новое задание и помещаем его в базу

    async createTask(req, res, next) {
        try{
            const {taskname, begindate, enddate, collaboratorId} = req.body;
            console.log({taskname, begindate, enddate, collaboratorId});
            const new_task = await Task.create({taskname, begindate, enddate, collaboratorId});
            console.log({taskname, begindate, enddate, collaboratorId});
            return res.json(new_task);
        } catch (e) {
            return next(errorHandler.badRequest(e.message));
        }
    }
    async deleteTask(req, res) {

    }
    async getTask(req, res) {
        const {id} = req.params;

        const task = await Task.findOne({
            where: {id}
        });

        return res.json(task);
    }

    // Получаем все имеющиеся задания

    async getTasks(req, res) {
        const tasks = await Task.findAll();
        return res.json({tasks: tasks});
    }
}

module.exports = new taskController();