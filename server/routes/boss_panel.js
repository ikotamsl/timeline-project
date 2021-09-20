const Router = require('express');

const router = new Router();
const bossController = require('../controllers/boss_controller');

router.get('/auth', bossController.authCheck);
router.get('/', bossController.getCollaborators);
router.get('/coll_task/:coll_id', bossController.getCollsTasks);

router.post('/new_coll', bossController.createCollaborator);

module.exports = router