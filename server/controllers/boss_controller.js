const errorHandler = require('../errors/errorHandler');

class bossObject {
    async login(req, res) {

    }
    async authCheck(req, res, next) {
        const {id} = req.query;

        if (!id) {
            return next(errorHandler.badRequest('Не задан ID'));
        }

        res.json(id);
    }
    async getCollsTasks(req, res) {

    }
    async isBoss(req, res, next) {
        const {is_boss} = req.query;

        if (!is_boss) {
            return next(errorHandler.forbidden('Вы не являетесь начальником'));
        } else {
            res.json({message: 'Добро пожаловать'});
        }

    }
}

module.exports = new bossObject();