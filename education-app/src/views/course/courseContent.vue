<template>
  <div class="courseMsg">
    <div class="title">{{ courseMsg.title }}</div>
    <div class="main">
      <div class="pushTime">发布时间：{{ courseMsg.pushTime }}</div>
    </div>
    <div class="content">{{ courseMsg.content }}</div>
  </div>
  <div class="displace">
    <Disscuss />
  </div>
</template>

<script>
import Disscuss from "../Discuss.vue";
import { reactive } from "@vue/reactivity";
export default {
  name: "courseContent",
  components: { Disscuss },
  setup() {
    const courseMsg = reactive({
      id: 1,
      title: "xxx",
      pushTime: "2022",
      content: "课文或者视屏的形式呈现",
    });
    return { courseMsg };
  },
};
</script>

<style lang="scss" scoped>
.courseMsg {
  .title {
    text-align: center;
    line-height: 35px;
    font-size: 40px;
    margin-bottom: 15px;
    margin-top: 5px;
    padding-top: 5px;
    font-weight: 900;
    border-bottom: 1px solid gray;
  }
  .main {
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
    margin-top: 5px;
    padding-top: 5px;
  }
  .content {
    text-align: center;
    font-size: 20px;
  }
}
.displace {
  margin-top: 50px;
}
</style>