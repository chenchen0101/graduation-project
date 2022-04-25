# 毕业大纲设计

## 前端vue3 + js

### 1、首页

- [ ] 热点专题
- [ ] 示范课

### 2、关于平台（空）

### 3、新闻中心

- [ ] 通知公告

  1、新闻资讯

  2、党史故事

### 4、思政社区

- [ ] 交流互动

### 5、登录

## 后端（express）

## 后台管理系统（vue3+element）

### 1、新闻增删查改

### 2、课程增删查改

### 3、评论增删查改



图片视屏显示：

解码器



setup() {

  const data = reactive({

   activeClass: ".swiper-contain", //滑动模块名称

  });

  // onMounted(() => {

  //  console.log(refData.activeClass.value);

  //  return new Swiper(refData.activeClass, {

  //   autoplay: true, //自动播放

  //   loop: true, //循环播放

  //   delay: 3000, //每张图间隔三秒

  //   //分页器

  //   pagination: {

  //    el: ".swiper-pagination",

  //   },

  //   //左右前进后退按钮

  //   navigation: {

  //    nextEl: ".swiper-button-next",

  //    prevEl: ".swiper-button-prev",

  //   },

  //  });

  // });

  const refData = toRefs(data);

  return {

   refData,

  };

 },
