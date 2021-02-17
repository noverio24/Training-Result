import { lazy } from 'react'

export default [
    { path: "/", exact: true, redirect: "/suratku" },
    { path: "/home", redirect: "/suratku" },

    { path: "/login", component: lazy(() => import('viewport/Door')) },
    { path: "/notfound", component: lazy(() => import('viewport/NotFound')) },
    { path: "/notallowed", component: lazy(() => import('viewport/NotAllowed')) },

    { path: "/me", component: lazy(()=> import('pages/Profile')) },
    { path: "/suratku", component: lazy(() => import('pages/Suratku')) },
    { path: "/asistensi", component: lazy(() => import('pages/Asistensi')) },
    { path: "/agenda", component: lazy(() => import('pages/Agenda')) },
    { path: "/pengaturan", component: lazy(() => import('pages/Pengaturan')) },
    { path: "/pengaturan_sistem", component: lazy(() => import('pages/pengaturan_sistem')) },
    { path: "/editor", component: lazy(() => import('pages/Editor')) },
    { path: "/about", component: lazy(()=> import('pages/About')) }
]