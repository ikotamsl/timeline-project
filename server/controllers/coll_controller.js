const errorHandler = require('../errors/errorHandler');
const {Task} = require("../models/models");
const {Collaborator} = require("../models/models");

class collaboratorController {
    async login(req, res) {

    }
    async authCheck(req, res, next) {
        const {id} = req.query;

        if (!id) {
            return next(errorHandler.badRequest('Не задан ID'));
        }

        res.json(id);
    }
    async getTask(req, res) {
        const {id, coll_id} = req.query;
        const task = await Task.findOne({
            where: {id: id,
                    collaboratorId: coll_id}
        });
        return res.json(task);
    }
    async getTasks(req, res) {
        const {coll_id} = req.query;

        const tasks = await Task.findAll({
            where: {collaboratorId : coll_id}
        });

        return res.json(tasks);
    }
}

module.exports = new collaboratorController();