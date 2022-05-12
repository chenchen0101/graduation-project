<template>
  <div class="wrapper">
    <div class="head">高校思政学习平台</div>
    <div class="topbar">
      <ul class="content">
        <li class="nav" v-for="nav in navList" :key="nav.text">
          <router-link class="title" :to="nav.path">{{ nav.text }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "HomeHeader",
  setup() {
    const router = useRouter();
    const navList = reactive([
      { path: "/", name: "home", text: "首页" },
      { path: "/about", name: "about", text: "关于我们" },
      { path: "/News", name: "News", text: "新闻中心" },
      { path: "/allCourse", name: "AllCourse", text: "思政课堂" },
      { path: "/Teacher", name: "Teacher", text: "名师推荐" },
      { path: "/communication", name: "communication", text: "交流园地" },
      { path: "/selfcenter", name: "selfcenter", text: "个人中心" },
    ]);

    return { navList };
  },
};
</script>

<style lang="scss" scoped>
.head {
  // width: 1300px;
  height: 150px;
  line-height: 150px;
  text-align: center;
  font-size: 50px;
  background: url(../../assets/top_bg.png) left center no-repeat #e30413;
}
.topbar {
  padding: 0;
  margin: 0;
  height: 50px;
  line-height: 50px;
  // width: 1800px;
  background: #000000;

  .content {
    display: flex;
    padding: 0;
    margin: 0;

    li:hover {
      background: #666;
    }
    li:last-child {
      background: #e30413;
      color: #c6c6c6;
    }
    .nav {
      display: flex;
      width: 180px;
      cursor: pointer;
      list-style-type: none;
      text-decoration: none;
      margin-left: 55px;

      justify-content: center;
      text-align: center;

      .title {
        width: 100%;
        height: 100%;
        text-decoration: none;
        list-style: none;
        border: 0;
        font-size: 20px;
        color: #fff;
      }
    }
  }
}
</style>