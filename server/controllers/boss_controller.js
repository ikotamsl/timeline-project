const errorHandler = require('../errors/errorHandler');
const {Boss, Task, Collaborator} = require('../models/models');

class bossController {

    // Проверка, авторизован ли начальник

    async authCheck(req, res, next) {
        const {id} = req.query;

        // Проверка на:
        // А. Наличие ID в запросе
        // Б. Наличие начальника по этому ID в системе.
        // Если проверка выдаёт null, то выдаётся ошибка 403 Forbidden

        if (!id || id < 1) {
            return next(errorHandler.badRequest('Не задан ID начальника'));
        } else {
            const isBossFlag = await Collaborator.findOne({where: {bossId: id}});

            if (isBossFlag === null) {
                return next(errorHandler.forbidden('Вы не босс!'));
            }
        }

        res.json(id);
    }

    // Получаем все имеющиеся задания для одного сотрудника

    async getCollsTasks(req, res) {
        const {coll_id} = req.params;

        const tasks = await Task.findAll({where: {collaboratorId: coll_id}});

        res.json(tasks);
    }

    // Получаем всех подчинённых данного руководителя

    async getCollaborators(req, res) {
        let {bossId} = req.query,
            collaborators;

        if (bossId) {
            collaborators = await Collaborator.findAll({where: {bossId}});
        } else {
            collaborators = await Collaborator.findAll();
        }

        return res.json(collaborators);
    }

    // Создание нового сотрудника

    async createCollaborator(req, res) {
        const {fullname, login, password, bossId} = req.body;
        const new_coll = await Collaborator.create({fullname, login, password, bossId});
        return res.json(new_coll);
    }
}

module.exports = new bossController();