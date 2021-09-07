const Router = require('express');

const router = new Router();
const taskController = require('../controllers/task_controller');
const bossController = require('../controllers/boss_controller');

router.get('/auth', bossController.authCheck);
router.get('/is_boss', bossController.isBoss);

module.exports = router