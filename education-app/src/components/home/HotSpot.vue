<template>
  <div class="banner">
    <!-- <img class="img" src="../../assets/26747.jpg" alt="" /> -->
    <swiper
      :autoplay="swiper_options.autoplay"
      :loop="swiper_options.loop"
      :speed="swiper_options.speed"
      :pagination="swiper_options.pagination"
    >
      <swiper-slide
        ><img
          class="img"
          src="	http://hnqmgc.17el.cn/upload/resources/image/2022/03/19/49772.png"
          alt=""
      /></swiper-slide>
      <swiper-slide
        ><img
          class="img"
          src="	http://hnqmgc.17el.cn/upload/resources/image/2021/09/28/46997.jpg"
          alt=""
      /></swiper-slide>
    </swiper>
    <div class="hotspot">
      <p class="title">热点</p>
      <a href="/news" class="content">发展为了青年，发展依靠青年</a>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
export default {
  name: "HotSpot",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // swiper相关配置属性放在swiper_options这个变量里
    let swiper_options = reactive({
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      loop: true,
      speed: 500,
      pagination: {
        clickable: true,
      },
    });
    // 将swiper_options返回给模板中的swiper组件使用
    return { swiper_options };
  },
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
