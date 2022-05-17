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
            @click="handleNav(item.id)"
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
      <ArticleList
        @delete="handleDelete"
        :articles="articles"
        v-if="activeIndex == 1"
      />
      <ArticlePublish v-if="activeIndex === 2" />
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
import { get, post } from "@/api";
import ArticleList from "./ArticleList.vue";
import ArticlePublish from "./ArticlePublish.vue";

export default {
  name: "News",
  components: {
    ArticleList,
    ArticlePublish,
  },
  setup() {
    const navType = reactive([
      { id: 1, type: "中心社区" },
      { id: 2, type: "我要发布" },
    ]);
    const activeIndex = ref(1);
    const handleNav = (index) => {
      activeIndex.value = index;
    };

    const articles = reactive([]);
    async function getArticles() {
      const url = "/articles";
      const response = await get(url);
      if (response.errcode === 0) {
        let data = response.data.map((item) => {
          return {
            ...item,
            pushTime: new Date(item.pushTime).toLocaleDateString(),
          };
        });
        articles.push(...data);
      }
    }
    getArticles();

    const handleDelete = async (id) => {
      console.log("delte id: ", id);
      const url = '/articles/delete';
      const response = await post(url, {
        id,
      });
      if(response.errcode === 0) {
        const deleteIndex = articles.findIndex((item) => {
          return item.id === id;
        })
        articles.splice(deleteIndex, 1);
      }
    };

    const router = useRouter();
    const toNewsCenter = (id) => {
      router.push(`/NewsCenter/${id}`);
    };
    return {
      toNewsCenter,
      navType,
      handleNav,
      articles,
      activeIndex,
      handleDelete,
    };
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
}
</style>
