import Task from "./page/Task";
import CollPage from './page/CollPage';
import BossPanel from "./page/BossPanel";

export const collAuth = [
    {
        path: '/task/:id',
        Component: Task
    },
    {
        path: '/coll_scrum',
        Component: CollPage
    },
    {
        path: '/coll_timeline',
        Component: CollPage
    }
];

export const bossAuth = [
    {
        path: '/boss_panel',
        Component: BossPanel
    },
    {
        path: '/boss_scrum',
        Component: BossPanel
    },
    {
        path: '/boss_timeline',
        Component: BossPanel
    },
    {
        path: '/task/:id',
        Component: BossPanel
    }
];