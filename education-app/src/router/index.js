import { createRouter, createWebHashHistory } from "vue-router"
import Home from '../components/home/Home.vue'
import NewsCenter from '../views/news/NewsCenter.vue'
import Login from '../views/login/login.vue'
import AllCourse from '../views/AllCourse.vue'
import HomeMain from "../components/home/HomeMain.vue"
import HomeCourse from "../components/home/HomeCourse.vue"
import Teacher from "../views/teacheres/Teacher.vue"
import News from "../views/news/News.vue"
import TeacherMsg from "../views/teacheres/TeacherMsg.vue"
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { path: '', name: "HomeMain", component: HomeMain },
      { path: '/AllCourse', name: "AllCourse", component: AllCourse },
      { path: '/News', name: "News", component: News, children: [{ path: '/NewsCenter', name: "NewsCenter", component: NewsCenter },] },

      { path: '/Teacher', name: "Teacher", component: Teacher },
      { path: "/News", name: "News", component: News },
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
  },
  { path: "/TeacherMsg", name: "TeacherMsg", component: TeacherMsg }
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