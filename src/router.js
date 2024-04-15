import {
  createRouter as _createRouter,
  createMemoryHistory,
  createWebHistory,
} from 'vue-router'

export function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR
      ? createMemoryHistory('/be/')
      : createWebHistory('/be/'),
    routes: [
      {
        path: '/marktplaats',
        name: 'marketplace___nl',
        component: () => import('./views/Marketplace.vue'),
      },
      {
        path: '/en/marketplace',
        name: 'marketplace___en',
        component: () => import('./views/Marketplace.vue'),
      }
    ],
  })
}
