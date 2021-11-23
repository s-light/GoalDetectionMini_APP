
export const childrenCommon = [
    {
        title: 'Welcome',
        icon: 'home',
        path: '/',
        component: () => import('pages/Index.vue')
    },
    {
        title: 'About',
        icon: 'mdi-information-variant',
        path: 'about',
        component: () => import('pages/About.vue')
    }
    // {
    //     title: 'Settings',
    //     icon: 'settings',
    //     path: 'settings',
    //     component: () => import('pages/Settings.vue')
    // }
]

const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            // { path: '', component: () => import('pages/Index.vue') },
            // { path: 'about', component: () => import('pages/About.vue') }
            ...childrenCommon,
            // ...childrenDebug,
            // ...childrenWizard,
            // ...childrenDev
        ]
    },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
