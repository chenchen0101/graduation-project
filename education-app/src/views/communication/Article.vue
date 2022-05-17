<template>
  <div class="body">
    <div class="main">
      <div class="right">
        <div class="right_bt">
          <a href="/">首页</a>
          > 思政社区 > 文章
        </div>
        <div class="right_nr">
          <div class="title">
            {{ article.title }}
          </div>
          <div class="text">
            &nbsp; &nbsp; &nbsp;作者：{{
              article.author
            }}
            发布时间：{{ article.publishtime }} &nbsp; &nbsp; &nbsp; 
            <div class="content">{{ article.content }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="displace">
      <Disscuss :articleId="id" />
    </div>
  </div>
</template>

<script>
import Disscuss from "../Discuss.vue";
import { reactive } from "vue";
import { useRoute } from 'vue-router';
import { get } from '@/api';

export default {
  name: "NewsCenter",
  components: { Disscuss },
  setup() {
    const article = reactive({
      title: '',
      author: '',
      publishtime: '',
      content: '',
    });
    const route = useRoute();
    const id = route.params.id;
    async function getArticle() {
      const url = `/articles/${id}`;
      const response = await get(url);
      if(response.errcode === 0) {
        console.log('xxx');
        const data = response.data;
        article.title = data.title;
        article.author = data.author;
        article.content = data.content;
        article.publishtime = new Date(data.pushTime).toLocaleDateString();
      }
    }
    getArticle();

    return { article, id };
  },
};
</script>

<style lang="scss" scoped>
.body {
  background: #fff;
}
.main {
  background: #fff;
  margin: 0 auto;
  display: flex;
}
.left {
  margin: 75px 35px 0 35px;
  width: 350px;

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
  width: 100%;
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
    .content {
      text-align: left;
      padding: 20px 100px;
    }
  }
}
.displace {
  margin: 100px 0 0 90px;
}
</style>
