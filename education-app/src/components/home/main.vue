<template>
  <div class="main">
    <div class="course">
      <div class="topbar">
        <ul>
          <li v-for="(item, index) in courseList" :key="index">
            <a href="">{{ item }}</a>
          </li>
        </ul>
      </div>
      <div class="courseall">
        <div class="courseitem">
          <img
            src="../../assets/bbc3dbf1-50d0-4594-9182-4be4d00b8b8b.jpg"
            class="img"
          />
          <p class="title">
            <a href="">深刻理解习近平新时代中国特色社会主义思想</a>
          </p>
        </div>
        <div class="courseitem">
          <img
            src="../../assets/bbc3dbf1-50d0-4594-9182-4be4d00b8b8b.jpg"
            class="img"
          />
          <p class="title">
            <a href="">深刻理解习近平</a>
          </p>
        </div>
        <div class="courseitem">
          <img
            src="../../assets/bbc3dbf1-50d0-4594-9182-4be4d00b8b8b.jpg"
            class="img"
          />
          <p class="title">
            <a href="">深刻理解习近平</a>
          </p>
        </div>
        <div class="courseitem">
          <img
            src="../../assets/bbc3dbf1-50d0-4594-9182-4be4d00b8b8b.jpg"
            class="img"
          />
          <p class="title">
            <a href="">深刻理解习近平</a>
          </p>
        </div>
        <div class="courseitem">
          <img
            src="../../assets/bbc3dbf1-50d0-4594-9182-4be4d00b8b8b.jpg"
            class="img"
          />
          <p class="title">
            <a href="">深刻理解习近平</a>
          </p>
        </div>
        <div class="courseitem">
          <img
            src="../../assets/bbc3dbf1-50d0-4594-9182-4be4d00b8b8b.jpg"
            class="img"
          />
          <p class="title">
            <a href="">深刻理解习近平</a>
          </p>
        </div>
        <div class="courseitem">
          <img
            src="../../assets/bbc3dbf1-50d0-4594-9182-4be4d00b8b8b.jpg"
            class="img"
          />
          <p class="title">
            <a href="">深刻理解习近平</a>
          </p>
        </div>
        <div class="courseitem">
          <img
            src="../../assets/bbc3dbf1-50d0-4594-9182-4be4d00b8b8b.jpg"
            class="img"
          />
          <p class="title">
            <a href="">深刻理解习近平</a>
          </p>
        </div>
        <div class="courseitem">
          <img
            src="../../assets/bbc3dbf1-50d0-4594-9182-4be4d00b8b8b.jpg"
            class="img"
          />
          <p class="title">
            <a href="">深刻理解习近平</a>
          </p>
        </div>
        <div class="courseitem">
          <img
            src="../../assets/bbc3dbf1-50d0-4594-9182-4be4d00b8b8b.jpg"
            class="img"
          />
          <p class="title">
            <a href="">深刻理解习近平</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="courseallbt" @click="toCourse">
    <a href="">全部课程</a>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "Main",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const courseList = reactive([
      "思政课堂",
      "必修课程",
      "选修课程",
      "特色课程",
      "政论课程",
    ]);
    const toCourse = () => {
      router.push({ name: "Course" });
    };
    return { courseList, toCourse };
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
