<template>
  <div class="banner">
    <img class="img" src="../../assets/26747.jpg" alt="" />
    <div class="hotspot">
      <p class="title">热点</p>
      <a href="/news" class="content">发展为了青年，发展依靠青年</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotSpot",
};
</script>

<style lang="scss" scoped>
.banner {
  background: white;
  .img {
    width: 100%;
  }
  .hotspot {
    display: flex;
    background: white;
    height: 60px;
    line-height: 60px;
    .title {
      width: 60px;
      height: 40px;
      font-size: 30px;
      color: red;
      margin: 0;
      margin-left: 25px;
    }
    .content {
      margin-left: 150px;
      font-size: 26px;
      color: #000000;
    }
  }
}
</style>>
