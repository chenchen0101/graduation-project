import { createRouter, createWebHashHistory } from "vue-router"
import Home from '../components/home/home.vue'
import News from '../views/news/newscenter.vue'
import Login from '../views/login/login.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [


    ]
  },
  { path: '/news', name: "News", component: News },
  { path: '/login', name: 'Login', component: Login }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router