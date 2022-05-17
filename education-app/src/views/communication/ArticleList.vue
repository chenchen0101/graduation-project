<template>
  <div class="text" v-for="item in articles" :key="item.id">
    <div class="title" @click="toNewsCenter(item.id)">
      {{ item.title }}
    </div>
    <div class="author">{{ item.author }}</div>
    <div class="pushTime">{{ item.pushTime }}</div>
    <button @click="handleDelete(item.id)">删除</button>
    <div class="line"></div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";

export default {
  props: {
    articles: Array,
  },
  emits: ['delete'],
  setup(_props, context) {
    const { emit } = context;
    const router = useRouter();
    const toNewsCenter = (id) => {
      router.push(`/article/${id}`);
    };
    const handleDelete = (id) => {

      emit('delete', id);
    }
    return {
      toNewsCenter,
      handleDelete,
    }
  }
}
</script>

<style scoped lang="scss">
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
    width: 200px;
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
</style>
