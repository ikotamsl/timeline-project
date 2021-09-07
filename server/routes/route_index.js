const Router = require('express'), router = new Router()
const bosstimelineRouter = require('./boss_timeline'),
    bossScrumRouter = require('./boss_scrum'),
    collTimelineRouter = require('./coll_timeline'),
    collScrumRouter = require('./coll_scrum'),
    taskRouter = require('./task_route');

router.use('/coll_scrum', collScrumRouter);
router.use('/boss_scrum', bossScrumRouter);
router.use('/coll_timeline', collTimelineRouter);
router.use('/boss_timeline', bosstimelineRouter);
router.use('/task', taskRouter);

module.exports = router