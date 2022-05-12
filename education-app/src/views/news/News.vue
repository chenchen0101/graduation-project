<template>
  <div class="main">
    <div class="left">
      <div class="left_bt">新闻中心</div>
      <div class="left_nr">
        <ul class="content">
          <li class="type">
            <a>通知公告</a>
          </li>
          <li class="type">
            <a>新闻资讯</a>
          </li>
          <li class="type">
            <a>党史故事</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div class="right_bt">
        <a>首页</a>
        > 新闻中心 > 新闻资讯
      </div>
      <div class="text" v-for="item in newsItem" :key="item.id">
        <div class="title">
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
    const newsItem = reactive([
      {
        id: 1,
        title: "习近平：在庆祝中国共产主义青年团100周年大会上的的讲话",
        pushTime: "[2022-05-10]",
      },
      {
        id: 2,
        title: "习近平：在庆祝中国共产主义青年团100周年大会上的的讲话",
        pushTime: "[2022-05-10]",
      },
      {
        id: 3,
        title: "习近平：在庆祝中国共产主义青年团100周年大会上的的讲话",
        pushTime: "[2022-05-10]",
      },
      {
        id: 4,
        title: "习近平：在庆祝中国共产主义青年团100周年大会上的的讲话",
        pushTime: "[2022-05-10]",
      },
      {
        id: 5,
        title: "习近平：在庆祝中国共产主义青年团100周年大会上的的讲话",
        pushTime: "[2022-05-10]",
      },
    ]);
    const router = useRouter();
    // const toCenter = () => {
    //   router.push({ name: "NewsCenter" });
    // };
    return { newsItem };
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
    background: #2a2a2a;
    height: 50px;
    line-height: 50px;
    border-bottom: 3px solid #c20e0e;
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
      }
      .type {
        height: 50px;
        line-height: 50px;
        border: 1px solid #dcdcdc;
        background: #f2ecec;
        margin: 10px 0;
        text-align: center;

        a {
          text-decoration: none;
          list-style: none;
          color: #000;
        }
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
