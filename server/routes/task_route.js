const Router = require('express');

const router = new Router();
const taskController = require('../controllers/task_controller');

router.post('/new_task', taskController.createTask);
router.get('/all_tasks', taskController.getTasks);
router.get('/:id', taskController.getTask);

module.exports = router