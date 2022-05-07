import { createRouter, createWebHashHistory } from "vue-router"
import Home from '../components/home/home.vue'
import News from '../views/news/newscenter.vue'
import Login from '../views/login/login.vue'
import Course from '../views/course/course.vue'
import StaticPart from '../components/home/StaticPart.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [

    ]
  },
  {
    path: '/staticpart',
    name: 'Staticpart',
    component: StaticPart,
    children: [
      { path: '/news', name: "News", component: News },
      { path: '/course', name: "Course", component: Course },
    ]
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter(to, from, next) {
      const isLogin = localStorage.isLogin
      if (isLogin) {
        next({ name: "Home" })
      } else {
        next()
      }

    }
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
//登录校验
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin
  if (isLogin || to.name === "Login") {
    next()
  } else {
    next({ name: "Login" })
  }
  next()
})
export default router