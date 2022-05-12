<template>
  <div class="teacher">
    <div class="left">
      <div class="introduce">导师简介</div>
    </div>
    <div class="right">
      <div class="right_bt">
        <a>首页</a>
        > 导师推荐 > 导师简介
      </div>
      <div class="msg">
        <div class="name">
          {{ teacherMsg.name }}
          <font>{{ teacherMsg.type }}</font>
        </div>
        <div class="content">
          <div class="msg">{{ teacherMsg.msg }}</div>
          <div class="work">工作经历</div>
          <div class="workcontent">{{ teacherMsg.work }}</div>
          <div class="honor">工作荣誉</div>
          <div class="honorcontent">{{ teacherMsg.honor }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "TeacherMsg",
  setup() {
    const teacherMsg = ref({
      id: 1,
      name: "朱登武",
      type: "团学导师",
      msg: "1975年5月生，男，中共党员，硕士，湖南衡阳师范学院学生工作处处长。",
      work: "2002/9——2002/12  衡阳师院中文系任党总支副书记",
      honor: `全国优秀团干、
        共青团十六大全国代表
        全国优秀教育工作者`,
    });
    return { teacherMsg };
  },
};
</script>

<style lang="scss" scoped>
.teacher {
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
  font-size: 20px;
  color: #fff;
  .introduce {
    background: #2a2a2a;
    height: 50px;
    line-height: 50px;
    border-bottom: 3px solid #c20e0e;
    text-align: center;
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
  .msg {
    padding: 20px 0;
    .name {
      font-size: 40px;
      line-height: 50px;
    }
    font {
      width: 90px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      padding: 6px 8px;
      font-size: 14px;
      background: #dfdfdf;
      margin-left: 15px;
      border-radius: 4px;
    }
  }
}
.content {
  color: #333;
  height: auto;
  padding: 15px 5px 5px;
  overflow: hidden;
  font-family: "微软雅黑";
  .msg {
    display: block;
    color: rgb(51, 51, 51);
    padding: 5px;
    font-size: 20px;
    font-family: 仿宋_GB2312, sans-serif;
  }
  .work {
    display: block;
    color: rgb(51, 51, 51);
    padding: 5px;
    font-size: 20px;
    line-height: 1.75em;
    text-indent: 2em;
    font-family: 仿宋_GB2312, sans-serif;
    background-color: rgb(216, 216, 216);
    margin: 20px 0;
  }
  .workcontent {
    display: block;
    color: rgb(51, 51, 51);
    padding: 5px;
    font-size: 20px;
    font-family: 仿宋_GB2312, sans-serif;
  }
  .honor {
    display: block;
    color: rgb(51, 51, 51);
    padding: 5px;
    font-size: 20px;
    line-height: 1.75em;
    text-indent: 2em;
    font-family: 仿宋_GB2312, sans-serif;
    background-color: rgb(216, 216, 216);
    margin: 20px 0;
  }
  .honorcontent {
    display: block;
    color: rgb(51, 51, 51);
    padding: 5px;
    font-size: 20px;
    font-family: 仿宋_GB2312, sans-serif;
  }
}
</style>
