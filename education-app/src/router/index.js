import { createRouter, createWebHashHistory } from "vue-router"
import Home from '../components/home/index.vue'
import NewsCenter from '../views/news/NewsCenter.vue'
import Login from '../views/login/login.vue'
import AllCourse from '../views/course/AllCourse.vue'
import HomeMain from "../components/home/HomeMain.vue"
import Teacher from "../views/teacheres/Teacher.vue"
import News from "../views/news/News.vue"
import TeacherMsg from "../views/teacheres/TeacherMsg.vue"
import courseContent from "../views/course/courseContent.vue"
import Communication from "../views/communication/index.vue"
import Article from '../views/communication/Article.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { path: '', name: "HomeMain", component: HomeMain },
      { path: '/allCourse', name: "AllCourse", component: AllCourse },
      { path: '/News', name: "News", component: News },
      { path: '/Teacher', name: "Teacher", component: Teacher },
      { path: "/Communication", name: "Communication", component: Communication },
      { path: '/article/:id', component: Article },
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
  {
    path: '/NewsCenter/:id', name: "NewsCenter", component: NewsCenter,
  },
  { path: "/TeacherMsg/:id", name: "TeacherMsg", component: TeacherMsg },
  { path: "/courseContent/:id", name: "courseContent", component: courseContent },
  
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

})
export default router