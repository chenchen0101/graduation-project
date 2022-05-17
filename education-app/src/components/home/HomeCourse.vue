<template>
  <div class="main">
    <div class="course">
      <div class="topbar">
        <ul>
          <li v-for="(item, index) in courseType" :key="index">
            <a href="">{{ item }}</a>
          </li>
        </ul>
      </div>
      <div class="courseall">
        <div class="courseitem" v-for="item in courseList" :key="item.name">
          <img :src="item.imgurl" class="img" />
          <p class="title">
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="courseallbt" @click="toCourse">
    <a>全部课程</a>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
function getImageUrl(name) {
  return new URL(`../../assets/${name}`, import.meta.url).href;
}
export default {
  name: "Main",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const courseType = reactive([
      "思政课堂",
      "必修课程",
      "选修课程",
      "特色课程",
      "政论课程",
    ]);
    const courseList = reactive([
      {
        id: 1,
        name: "文化自信与社会主义核心价值观",
        imgurl:
          "	http://qmos.17el.cn//imgs/12/9/courseImg//330a10af-e3fa-4132-86b2-dea7e16da7bc.jpg",
      },
      {
        name: "深刻理解习近平新时代特色社会主义思想",
        imgurl:
          "http://qmos.17el.cn//imgs/12/9/courseImg//bbc3dbf1-50d0-4594-9182-4be4d00b8b8b.jpg",
      },
      {
        name: "活的马克思",
        imgurl:
          "http://qmos.17el.cn//imgs/12/9/courseImg//fe414987-3f82-4387-9ec3-a439a4fefeb2.jpg",
      },
      {
        name: "共产党宣言",
        imgurl:
          "http://qmos.17el.cn//imgs/12/9/courseImg//f5958475-b410-4ea2-8919-6cc121486d8a.jpg",
      },
      {
        name: "共产党宣言",
        imgurl:
          "http://qmos.17el.cn//imgs/12/9/courseImg//f5958475-b410-4ea2-8919-6cc121486d8a.jpg",
      },
      {
        name: "《红色革命家》",
        imgurl:
          "http://qmos.17el.cn//imgs/12/9/courseImg//cb37981e-759e-47ae-af14-001407919f4f.jpg",
      },
      {
        name: "伟大觉醒 伟大革命",
        imgurl:
          "http://qmos.17el.cn//imgs/12/9/courseImg//be69c899-7bb6-4a73-9231-9c83e938ed0b.jpg",
      },
      {
        name: "全球治理与大国担当",
        imgurl:
          "http://qmos.17el.cn//imgs/12/9/courseImg//0d87da45-24f2-45b6-b35f-53609bc50161.jpg",
      },
      {
        name: "如何抵御西方殖民精神",
        imgurl:
          "http://qmos.17el.cn//imgs/12/9/courseImg//4c78d72f-fed2-4911-8b42-99b8ea3fe3aa.jpg",
      },
      {
        name: "如何抵御西方殖民精神",
        imgurl:
          "http://qmos.17el.cn//imgs/12/9/courseImg//4c78d72f-fed2-4911-8b42-99b8ea3fe3aa.jpg",
      },
    ]);
    const toCourse = () => {
      router.push({ name: "AllCourse" });
    };
    return { courseType, toCourse, courseList };
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 1700px;
  .course {
    .topbar {
      margin: 30px 0;
      height: 50px;

      ul {
        display: flex;
        text-decoration: none;
        list-style: none;
        padding: 0;
        .title {
        }
        li a {
          text-decoration: none;
          list-style: none;
          background: #000;
          width: 140px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          margin-right: 2px;
          color: #fff;
          display: block;
          font-size: 18px;
          cursor: pointer;
        }
        a:hover {
          background: red;
        }
      }
    }
    .courseall {
      display: flex;
      flex-wrap: wrap;

      .courseitem {
        width: 20%;

        .img {
          display: block;
          width: 280px;
          height: 210px;
          margin: 20px auto;
        }
        .title {
          text-align: center;
        }
        a {
          text-decoration: none;
          list-style: none;
          color: #000;
        }
      }
    }
  }
}
.courseallbt {
  width: 173px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background: #dadada;
  margin: 0 auto;
  border: 1px solid #c0c3c5;
  a {
    text-decoration: none;
    list-style: none;
    color: #000;
    font-size: 20px;
  }
  a:hover {
    color: red;
  }
}
</style>
