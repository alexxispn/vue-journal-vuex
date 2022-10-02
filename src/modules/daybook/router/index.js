export default {
    path: '/daybook',
    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout'),
    children: [
        {
            path: '',
            name: 'db-no-entry',
            component: () => import(/* webpackChunkName: "db-no-entry" */ '@/modules/daybook/views/NoEntrySelected')
        },
        {
            path: ':id',
            name: 'db-entry',
            component: () => import(/* webpackChunkName: "db-entry" */ '@/modules/daybook/views/EntryView'),
        }
    ]
}
