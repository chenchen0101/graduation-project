<template>
  <div class="main">
    <div class="left">
      <div class="left_bt">新闻中心</div>
      <div class="left_nr">
        <ul class="content">
          <li class="title">
            <a>通知公告</a>
          </li>
          <li class="title">
            <a>新闻资讯</a>
          </li>
          <li class="title">
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
      <div class="right_nr" v-for="item in news" :key="item.id">
        <div class="title">
          {{ item.title }}
        </div>
        <div class="text">
          来源：&nbsp;{{ item.origin }} &nbsp; &nbsp; &nbsp;作者：{{
            item.author
          }}
          发布时间：{{ item.publishtime }} &nbsp; &nbsp; &nbsp; 点击数：
          <span class="hitcount">{{ item.hitcount }}</span>
          <div>{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "NewsCenter",

  setup() {
    // const count = ref(0);
    const news = reactive([
      {
        id: 1,
        title: "坚定不移听党话跟党走",
        origin: "中国共青杂志",
        author: "xxx",
        publishtime: "xxx",
        hitcount: 0,
        content: "xxxxxxx",
      },
      {
        id: 2,
        title: "党的十八大",
        origin: "中国共青杂志",
        author: "xxx",
        publishtime: "xxx",
        hitcount: 0,
        content: "xxxxxxx",
      },
    ]);
    return { news };
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
      .title {
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
  .right_nr {
    color: #636363;
    padding: 20px 0;
    .title {
      text-align: center;
      font-size: 30px;
      line-height: 50px;
      font-weight: 650;
    }
    .text {
      text-align: center;
      line-height: 35px;
      font-size: 18px;
      margin-bottom: 15px;
      border-top: 1px solid gray;
      margin-top: 5px;
      padding-top: 5px;
    }
  }
}
</style>
