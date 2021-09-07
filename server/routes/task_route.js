const Router = require('express');

const router = new Router();
const taskController = require('../controllers/task_controller');

router.post('/', taskController.createTask);
router.get('/', taskController.getTasks);
router.get('/:id', taskController.getTask);

module.exports = router