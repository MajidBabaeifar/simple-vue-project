import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersList from '../components/UsersList.vue'
import CounterComponent from '../components/CounterComponent.vue'
import ContactUs from '../components/ContactUs.vue'
import SingleUser from "../components/SingleUser.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/list/:id',
    name: 'SingleUser',
    component: SingleUser
  },
  {
    path: '/contactus',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/counter',
    name: 'counter',
    component: CounterComponent
  },
  {
    path: '/list',
    name: 'list',
    component: UsersList
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
