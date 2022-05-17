<template>
  <div class="main">
    <div class="left">
      <div class="left_bt">思政社区</div>
      <div class="left_nr">
        <ul class="content">
          <li
            class="type"
            v-for="item in navType"
            :key="item.type"
            @click="handleNav(item.type)"
          >
            {{ item.type }}
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div class="right_bt">
        <a href="/">首页</a>
        > 思政社区
      </div>
      <div class="text" v-for="item in filterNews" :key="item.id">
        <div class="title" @click="toNewsCenter(item.id)">
          {{ item.title }}
        </div>
        <div class="pushTime">{{ item.pushTime }}</div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
export default {
  name: "News",
  setup() {
    const navType = reactive([
      { id: 1, type: "中心社区" },
      { id: 2, type: "我要发布" },
      { id: 3, type: "我要提案" },
    ]);
    const newsItem = reactive([
      {
        id: 1,
        title: "习近平：在庆祝中国共产主义青年团100周年大会上的的讲话",
        pushTime: "[2022-05-09]",
        type: "通知公告",
      },
      {
        id: 2,
        title: "习近平：在庆祝中国共产主义青年团100周年大会上的的讲话",
        pushTime: "[2022-05-11]",
        type: "通知公告",
      },
      {
        id: 3,
        title: "习近平：在庆祝中国共产主义青年团100周年大会上的的讲话",
        pushTime: "[2022-05-08]",
        type: "通知公告",
      },
      {
        id: 4,
        title: "习近平：在庆祝中国共产主义青年团100周年大会上的的讲话",
        pushTime: "[2022-05-10]",
        type: "新闻资讯",
      },
      {
        id: 5,
        title: "习近平：在庆祝中国共产主义青年团100周年大会上的的讲话",
        pushTime: "[2022-05-10]",
        type: "党史故事",
      },
    ]);
    //链接到新闻类别
    const filterNews = ref(newsItem);
    const handleNav = (navType) => {
      filterNews.value = newsItem.filter((item) => {
        return item.type.includes(navType);
      });
    };

    const router = useRouter();
    const toNewsCenter = (id) => {
      router.push(`/NewsCenter/${id}`);
    };
    return { newsItem, toNewsCenter, navType, handleNav, filterNews };
  },
};
</script>

<style lang="scss" scoped>
.main {
  // width: 1300px;
  height: 1200px;
  background: #fff;
  margin: 0 auto;
  display: flex;
}
.left {
  margin: 75px 35px 0 35px;
  width: 350px;
  height: 195px;
  // background: pink;
  font-size: 20px;
  color: #fff;
  .left_bt {
    font-size: 35px;
    height: 50px;
    line-height: 50px;
    color: #6ac400;
    text-align: center;
  }
  .left_nr {
    .content {
      text-decoration: none;
      list-style: none;
      padding: 0;
      margin: 0 auto;
      li:hover {
        background: #fff;
        cursor: pointer;
      }
      .type {
        height: 50px;
        line-height: 50px;
        border: 1px solid #dcdcdc;
        background: #f2ecec;
        margin: 10px 0;
        text-align: center;
        color: #000;
      }
    }
  }
}
.right {
  width: 860px;
  padding: 30px 30px 20px 10px;
  color: #636363;

  .right_bt {
    border-bottom: 1px solid #e3e3e3;
    color: #939393;
    font-size: 18px;
    height: 30px;
    text-align: right;
    margin-top: 14px;
    a {
      text-decoration: none;
      list-style: none;
      color: #939393;
    }
  }
  .text {
    font-family: 宋体;
    border-bottom: 1px dashed rgb(187, 187, 187);
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    .title {
      font-size: 18px;
      font-family: 宋体;
      border-bottom: 1px dashed rgb(187, 187, 187);
      height: 40px;
      line-height: 40px;
      text-decoration: none;
      list-style: none;
    }
    div:hover {
      cursor: pointer;
    }
    .pushtime {
      width: 860px;
      padding: 30px 30px 20px 10px;
      color: #636363;
    }
  }
}
</style>
