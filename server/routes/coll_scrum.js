const Router = require('express');

const router = new Router();
const collController = require("../controllers/coll_controller");

router.get('/auth', collController.authCheck);
router.get('/tasks', collController.getTasks);
router.get('/task', collController.getTask);

module.exports = router