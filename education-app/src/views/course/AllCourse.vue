<template>
  <div class="topbar">
    <div class="current">
      <a href="/"> 首页</a>
      > <a>思政课堂</a>
    </div>
    <div class="title">
      <ul class="bigtype">
        <li v-for="item in courseTypeList" :key="item.type">{{ item.type }}</li>
      </ul>
    </div>
  </div>
  <div class="main">
    <div class="left">
      <div class="left_bt">课程类别</div>
      <div class="left_nr">
        <ul class="content">
          <li
            class="type"
            v-for="item in courseNav"
            :key="item.type"
            @click="handleNav(item.type)"
          >
            {{ item.type }}
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div class="right_bt">
        <ul class="courseSort">
          <li
            v-for="item in courseSort"
            :key="item.title"
            @click="Sort(item.title)"
          >
            {{ item.title }}
          </li>
        </ul>
        <div class="search">
          <div class="searchtext">
            <input type="text" name="" class="text" v-model="search" />
          </div>
          <div class="searchbtn" @click="handleSearch">查询</div>
        </div>
      </div>
      <div
        class="courseList"
        v-for="course in filterCourse"
        :key="course.title"
      >
        <div class="courseTitle">
          <div class="title">{{ course.title }}</div>
          <div class="toLearn" @click="toCourseContent(course.id)">
            进入学习
          </div>
        </div>
        <div class="courseMsg">
          <div class="courseType">课程类别：{{ course.type }}</div>
          <div class="pushTime">{{ course.pushTime }}</div>
          <div class="likeNum">
            <img
              class="like"
              src="http://qmedu.17el.cn/hnlgb/images/u235.png"
              alt=""
              @click="handleLike(course.id)"
            />
            <div class="nums">{{ course.likeNum }}</div>
          </div>
          <div class="browseNum">
            <img
              class="look"
              src="http://qmedu.17el.cn/hnlgb/images/u237_1.png"
              alt=""
            />
            <div class="nums">{{ course.browseNum }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
export default {
  name: "AllCourse",
  setup() {
    const router = useRouter();

    const courseItem = reactive([
      {
        id: 1,
        title: "马克思",
        type: "政治理论",
        pushTime: "2022-05-10",
        likeNum: 0,
        browseNum: 0,
        teacher: "朱登武",
      },
      {
        id: 2,
        title: "社会主义核心价值观与青年",
        type: "政治理论",
        pushTime: "2022-05-11",
        likeNum: 0,
        browseNum: 0,
        teacher: "朱登武",
      },
      {
        id: 3,
        title: "铭记五四历史",
        type: "政治理论",
        pushTime: "2022-05-12",
        likeNum: 0,
        browseNum: 0,
        teacher: "朱登武",
      },
      {
        id: 4,
        title: "为什么要深入批判历史虚无主义",
        type: "国家安全",
        pushTime: "2022-05-13",
        likeNum: 0,
        browseNum: 0,
        teacher: "张学锋",
      },
      {
        id: 5,
        title: "中国特色社会主义为什么好",
        type: "文化素养",
        pushTime: "2022-04-10",
        likeNum: 0,
        browseNum: 0,
        teacher: "张学锋",
      },
    ]);
    const toCourseContent = (id) => {
      router.push(`/courseContent/${id}`);
    };
    //查询课程
    const search = ref("");
    const filterCourse = ref(courseItem);
    const handleSearch = () => {
      filterCourse.value = courseItem.filter((item) => {
        return (
          item.title.includes(search.value) || item.type.includes(search.value)
        );
      });
    };
    //点赞+1
    const handleLike = (id) => {
      filterCourse.value.map((item, index) => {
        if (item.id === id) {
          return item.likeNum++;
        }
      });
    };
    const courseNav = reactive([
      { type: "政治理论" },
      { type: "时政热点" },
      { type: "国家安全" },
      { type: "团建指南" },
      { type: "文化素养" },
    ]);

    //链接到课程类别
    const handleNav = (navType) => {
      filterCourse.value = courseItem.filter((item) => {
        return item.type.includes(navType);
      });
    };
    const courseTypeList = reactive([
      { type: "全部" },
      { type: "必修" },
      { type: "选修" },
      { type: "专题" },
      { type: "入党积极分子" },
      { type: "团学干部" },
      { type: "网络文明志愿者" },
    ]);
    const courseSort = reactive([
      { title: "课程" },
      { title: "默认排序" },
      { title: "上传时间↓" },
      { title: "点赞人数↓" },
      { title: "点击次数↓" },
    ]);
    const Sort = (sortType) => {
      //按照发布时间排序
      if (sortType === "上传时间↓") {
        filterCourse.value.sort(function (a, b) {
          return b.pushTime < a.pushTime ? -1 : 1;
        });
        //按照点赞数进行排序
      } else if (sortType === "点赞人数↓") {
        filterCourse.value.sort(function (a, b) {
          return b.likeNum < a.likeNum ? -1 : 1;
        });
      }
    };

    return {
      search,
      handleSearch,
      filterCourse,
      courseItem,
      toCourseContent,
      courseTypeList,
      courseSort,
      courseNav,
      handleNav,
      handleLike,
      Sort,
    };
  },
};
</script>

<style lang="scss" scoped>
.topbar {
  background: #fff;
  border-bottom: 1px solid #e3e3e3;
  color: #393939;
  font-size: 18px;
  height: 30px;
  padding-top: 14px;
  display: flex;
  .current {
    a {
      text-decoration: none;
      list-style: none;
    }
  }
  .title {
    margin-left: 126px;
    .bigtype {
      text-decoration: none;
      list-style: none;
      display: flex;
      margin: 0%;
      li {
        margin-left: 30px;
        cursor: pointer;
      }
      li:hover {
        color: #52adf4;
        border-bottom: 2px #52adf4 solid;
      }
    }
  }
}
.main {
  // width: 1300px;
  height: 1200px;
  background: #fff;
  margin: 0 auto;
  display: flex;
}
.left {
  margin: 75px 35px 0 35px;
  width: 250px;
  height: 195px;

  font-size: 20px;
  color: #fff;
  .left_bt {
    background: #2a2a2a;
    height: 50px;
    line-height: 50px;
    border-bottom: 3px solid #c20e0e;
    text-align: center;
  }
  .left_nr {
    .content {
      text-decoration: none;
      list-style: none;
      padding: 0;
      margin: 0 auto;
      li:hover {
        background: #fff;
      }
      .type {
        cursor: pointer;
        height: 50px;
        line-height: 50px;
        border: 1px solid #dcdcdc;
        margin: 10px 0;
        text-align: center;
        background-color: #f8f8f8;
        color: #585858;
      }
    }
  }
}
.right {
  width: 860px;
  padding: 30px 30px 20px 10px;
  color: #636363;

  .right_bt {
    display: flex;
    border-bottom: 1px solid #e3e3e3;
    .courseSort {
      color: #393939;
      font-size: 18px;
      height: 30px;
      text-decoration: none;
      list-style: none;
      display: flex;
      padding: 10px 0 20px 0;
      margin: 0%;

      li {
        margin-right: 30px;
        cursor: pointer;
      }
      li:hover {
        color: #52adf4;
        border-bottom: 2px #52adf4 solid;
      }
    }
    .search {
      margin-left: 30px;
      display: flex;
      .searchtext {
        .text {
          height: 30px;
          width: 210px;
          line-height: 30px;
          border-radius: 0 !important;
          color: #858585;
          background-color: #ffffff;
          border: 1px solid #d5d5d5;
          padding: 4px 4px 5px;
          font-size: 16px;
          font-family: inherit;
        }
      }
      .searchbtn {
        width: 80px;
        line-height: 41px;
        height: 41px;
        background: #e4e4e4;
        text-align: center;
        border-radius: 2px;
        cursor: pointer;
        margin-left: 20px;
      }
    }
  }
  .courseList {
    margin-top: 10px;
    .courseTitle {
      width: 748;
      height: 50px;
      line-height: 50px;
      display: flex;
      margin-top: 6px;
      border: 1px #e4e4e4 solid;
      display: flex;

      align-content: center;
      align-items: center;
      .title {
        color: #393939;
        width: 600px;
        margin-left: 20px;
        font-size: 18px;
        font-weight: 900;
      }
      .toLearn {
        width: 76px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        margin-left: 170px;
        cursor: pointer;
        background: #f2f2f2;
        border: 1px #52adf4 solid;
        border-radius: 3px;
      }
    }
    .courseMsg {
      display: flex;
      width: 748;
      height: 40px;
      line-height: 40px;
      display: flex;
      border: 1px #e4e4e4 solid;
      background: #fafafa;
      font-size: 16px;
      .courseType {
        margin-right: 100px;
        margin-left: 20px;
      }
      .pushTime {
        margin-right: 100px;
        margin-left: 20px;
      }
      .likeNum {
        display: flex;
        margin-right: 100px;
        margin-left: 20px;
        .like {
          width: 30px;
          height: 30px;
          margin-top: 5px;
        }
        .nums {
          width: 30px;
          height: 30px;
          margin-top: 2px;
        }
      }
      .browseNum {
        margin-right: 70px;
        margin-left: 20px;
        display: flex;
        .look {
          width: 30px;
          height: 30px;
          margin-top: 5px;
        }
        .nums {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
}
</style>
