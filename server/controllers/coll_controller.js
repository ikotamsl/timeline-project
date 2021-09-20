const errorHandler = require('../errors/errorHandler');
const {Task, Collaborator} = require("../models/models");


class collaboratorController {

    // Проверка авторизации сотрудника на портале
    // А. Проверяем, задан ли ID
    // Б. Проверяем указанный ID на его наличие в системе

    async authCheck(req, res, next) {
        const {id} = req.query;

        if (!id || id < 1) {
            return next(errorHandler.badRequest('Не задан ID сотрудника'));
        } else {
            const isCollaborator = await Collaborator.findOne({where: {id: id}});

            if (isCollaborator === null) {
                return next(errorHandler.forbidden('Вы не являетесь сотрудником.'));
            }
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