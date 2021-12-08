const ShowHome = () => import('../pages/Home.vue')
const ShowContainer = () => import('../pages/ViewContainer.vue')

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'ShowHome',
    component: ShowHome,
  },
  {
    path: '/container',
    name: 'ShowContainer',
    component: ShowContainer,
  },
]

export default routes
