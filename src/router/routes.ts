const Home = () => import('../pages/Home.vue')
const ViewContainer = () => import('../pages/ViewContainer.vue')
const ViewButton = () => import('../pages/ViewButton.vue')

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/container',
    name: 'ViewContainer',
    component: ViewContainer,
  },
  {
    path: '/button',
    name: 'ViewButton',
    component: ViewButton,
  },
]

export default routes
