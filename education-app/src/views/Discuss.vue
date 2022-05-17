<template>
  <div class="discuss">
    <div class="title">已发布的评论:</div>
    <div class="comment-input__container">
      <img
        src="https://www.keaidian.com/uploads/allimg/190424/24110307_6.jpg"
      />
      <input type="text" placeholder="说点什么吧..." />
      <div class="submit-btn">发布</div>
    </div>
    <div
      class="comment__card__wrapper"
      v-for="item in userMsg"
      :key="item.userName"
    >
      <img
        src="https://www.keaidian.com/uploads/allimg/190424/24110307_6.jpg"
      />
      <div class="body">
        <span class="username">{{ item.userName }}</span>
        <div class="content">{{ item.content }}</div>
      </div>
      <div class="pushtime">
        <span class="time">{{ item.pushTime }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from "@vue/reactivity";
export default {
  name: "Disscuss",
  setup() {
    const discussText = ref("");
    const userMsg = reactive([
      { id: "1", userName: "陈晓茹", content: "xxxxx", pushTime: "2022-05-10" },
      { id: "2", userName: "陈晓茹", content: "xxxxx", pushTime: "2022-05-10" },
      { id: "3", userName: "陈晓茹", content: "xxxxx", pushTime: "2022-05-10" },
    ]);

    return { userMsg };
  },
};
</script>
<style scoped lang="scss">
.discuss {
  margin-left: 20px;
}
.title {
  font-size: 20px;
}
.comment-input__container {
  display: flex;
  align-items: center;
  margin-top: 22px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  input {
    padding: 3px 10px;
    background: rgba(246, 246, 246, 0.17);
    border: 1px solid #000000;
    border-radius: 10px;
    height: 20px;
    margin-left: 20px;
    width: 80%;
  }
  .submit-btn {
    margin-left: 10px;
    font-size: 14px;
    height: 28px;
    width: 42px;
    line-height: 28px;
    background: #dcdcdc;
    text-align: center;
    cursor: pointer;
  }
}
.comment__card__wrapper {
  margin-top: 20px;
  display: flex;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  > .body {
    padding-bottom: 10px;
    margin: 0 15px;
    width: 80%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #f1f1f1;
    .username {
      margin-top: 5px;
      font-size: 15px;
    }
    .content {
      margin-top: 10px;
      font-size: 15px;
    }
  }
  .pushtime {
    font-size: 12px;
    width: 90px;
    height: 70px;
    line-height: 70px;
  }
}
</style>
