<template>
  <div class="publish__container">
    <div class="title__wrapper">
      <h3>标题：</h3>
      <input type="text" v-model="article.title" />
    </div>
    <div class="content__wrapper">
      <h3>内容：</h3>
      <textarea v-model="article.content" ></textarea>
    </div>
    <button @click="publishArticle">发布</button>
  </div>
</template>

<script>
import { post } from '@/api';
import { reactive } from 'vue';

export default {
  setup() {
    const article = reactive({
      title: '',
      content: '',
      author: localStorage.account,
    })
    async function publishArticle() {
      const url = '/articles/create'
      const response = await post(url, article)
      if(response.errcode === 0) {
        window.alert("发布成功")
        article.title = '';
        article.content = '';
      } else {
        window.alert("发布失败")
      }
    }
    return {
      publishArticle,
      article,
    }
  }
};
</script>

<style scoped lang="scss">
.publish__container {
  padding: 30px;
  > .title__wrapper {
    display: flex;
    align-items: center;
    h3 {
      font-size: 20px;
    }
    input {
      width: 450px;
      padding: 10px;
      height: 20px;
    }
  }
  > .content__wrapper {
    h3 {
      font-size: 20px;
    }
    textarea {
      padding: 10px;
      width: 650px;
      height: 400px;
      resize: none;
    }
  }
  > button{
    margin-top: 20px;
    width: 670px;
  }
}
</style>
