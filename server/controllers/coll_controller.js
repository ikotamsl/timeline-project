const errorHandler = require('../errors/errorHandler');

class CollaboratorObject {
    async login(req, res) {

    }
    async authCheck(req, res, next) {
        const {id} = req.query;

        if (!id) {
            return next(errorHandler.badRequest('Не задан ID'));
        }

        res.json(id);
    }
    async getTasks(req, res) {

    }
}

module.exports = new CollaboratorObject();