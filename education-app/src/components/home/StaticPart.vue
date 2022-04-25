<template>
  <div class="wrapper">
    <div class="head">高校思政学习平台</div>
    <div class="topbar">
      <ul class="content">
        <li class="nav">
          <a href="/" class="title">首页</a>
        </li>
        <li class="nav">
          <a href="/" class="title">关于我们</a>
        </li>
        <li class="nav">
          <a href="/" class="title">新闻中心</a>
        </li>
        <li class="nav">
          <a href="/" class="title">思政课程</a>
        </li>
        <li class="nav">
          <a href="/" class="title">名师推荐</a>
        </li>
        <li class="nav">
          <a href="/" class="title">交流园地</a>
        </li>
        <li class="nav">
          <a href="/" class="title">登录</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "StaticPart",
};
</script>

<style lang="scss" scoped>
.head {
  // width: 1300px;
  height: 150px;
  line-height: 150px;
  text-align: center;
  font-size: 50px;
  background: url(../../assets/top_bg.png) left center no-repeat #e30413;
}
.topbar {
  padding: 0;
  margin: 0;
  height: 50px;
  line-height: 50px;
  // width: 1800px;
  background: #000000;

  .content {
    display: flex;
    padding: 0;
    margin: 0;

    li:hover {
      background: #666;
    }
    li:last-child {
      background: #e30413;
      color: #c6c6c6;
    }
    .nav {
      display: flex;
      width: 180px;
      cursor: pointer;
      list-style-type: none;
      text-decoration: none;
      margin-left: 55px;

      justify-content: center;
      text-align: center;
      a:last-child {
      }
      .title {
        text-decoration: none;
        list-style: none;
        border: 0;
        font-size: 20px;
        color: #fff;
      }
    }
  }
}
</style>