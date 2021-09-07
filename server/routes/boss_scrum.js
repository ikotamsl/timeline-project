const Router = require('express');

const router = new Router();
const taskController = require('../controllers/task_controller');
const collController = require("../controllers/coll_controller");

router.post('/login', collController.login);
router.get('/auth', collController.authCheck);
router.get('/task', taskController.getTask);
router.get('/tasks', taskController.getTasks);

module.exports = router