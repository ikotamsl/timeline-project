const errorHandler = require('../errors/errorHandler');
const {Boss, Task, Collaborator} = require('../models/models');

class bossController {
    async login(req, res) {

    }

    // Проверка, авторизован ли пользователь

    async authCheck(req, res, next) {
        const {id} = req.query;

        if (!id) {
            return next(errorHandler.badRequest('Не задан ID'));
        }

        res.json(id);
    }

    async getCollsTasks(req, res) {

    }

    // Получаем всех подчинённых данного руководителя

    async getCollaborators(req, res) {
        let {fullname, bossId} = req.query,
            collaborators;

        if (bossId) {
            collaborators = await Collaborator.findAll({where: {bossId}});
        } else {
            collaborators = await Collaborator.findAll();
        }

        return res.json(collaborators);
    }

    //Создаём нового сотрудника

    async createCollaborator(req, res) {
        const {fullname, login, password, bossId} = req.body;
        const new_coll = await Collaborator.create({fullname, login, password, bossId});
        return res.json(new_coll);
    }

    // Проверка, является ли данный пользователь руководителем

    async isBoss(req, res, next) {
        const {is_boss} = req.query;

        if (!is_boss) {
            return next(errorHandler.forbidden('Вы не являетесь начальником'));
        } else {
            res.json({message: 'Добро пожаловать'});
        }
    }
}

module.exports = new bossController();