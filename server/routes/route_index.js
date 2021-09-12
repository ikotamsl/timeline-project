const Router = require('express'), router = new Router()
const bossTimelineRouter = require('./boss_timeline'),
    bossScrumRouter = require('./boss_scrum'),
    bossPanel = require('./boss_panel'),
    collTimelineRouter = require('./coll_timeline'),
    collScrumRouter = require('./coll_scrum'),
    taskRouter = require('./task_route');

router.use('/coll_scrum', collScrumRouter);
router.use('/boss_scrum', bossScrumRouter);
router.use('/coll_timeline', collTimelineRouter);
router.use('/boss_timeline', bossTimelineRouter);
router.use('/task', taskRouter);
router.use('/boss_panel', bossPanel);

module.exports = router