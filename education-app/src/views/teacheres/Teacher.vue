<template>
  <div class="teacher">
    <div class="left">
      <div class="introduce">导师推荐</div>
    </div>
    <div class="right">
      <div class="right_bt">
        <a>首页</a>
        > 导师推荐 > 导师简介
      </div>
      <div class="teacherList">
        <div class="title">名师推荐</div>
        <div class="teacherAll">
          <div
            class="teacheritem"
            v-for="item in TeacherList"
            :key="item.name"
            @click="toTeacherMsg(item.id)"
          >
            <img :src="item.imgurl" class="img" />
            <p class="name">
              {{ item.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive } from "vue";
export default {
  name: "Teacher",
  setup() {
    const router = useRouter();
    const TeacherList = reactive([
      {
        id: 1,
        name: "朱登武",
        imgurl:
          "http://hnqmgc.17el.cn/upload/resources/image/2016/01/19/25440.jpg",
      },
      {
        id: 2,
        name: "张学锋",
        imgurl:
          "http://hnqmgc.17el.cn/upload/resources/image/2016/01/19/25440.jpg",
      },
      {
        id: 3,
        name: "朱登武",
        imgurl:
          "http://hnqmgc.17el.cn/upload/resources/image/2016/01/19/25440.jpg",
      },
      {
        id: 4,
        name: "朱登武",
        imgurl:
          "http://hnqmgc.17el.cn/upload/resources/image/2016/01/19/25440.jpg",
      },
      {
        id: 5,
        name: "朱登武",
        imgurl:
          "http://hnqmgc.17el.cn/upload/resources/image/2016/01/19/25440.jpg",
      },
      {
        id: 6,
        name: "朱登武",
        imgurl:
          "http://hnqmgc.17el.cn/upload/resources/image/2016/01/19/25440.jpg",
      },
      {
        id: 7,
        name: "朱登武",
        imgurl:
          "http://hnqmgc.17el.cn/upload/resources/image/2016/01/19/25440.jpg",
      },
      {
        id: 8,
        name: "朱登武",
        imgurl:
          "http://hnqmgc.17el.cn/upload/resources/image/2016/01/19/25440.jpg",
      },
      {
        id: 9,
        name: "朱登武",
        imgurl:
          "http://hnqmgc.17el.cn/upload/resources/image/2016/01/19/25440.jpg",
      },
      {
        id: 10,
        name: "朱登武",
        imgurl:
          "http://hnqmgc.17el.cn/upload/resources/image/2016/01/19/25440.jpg",
      },
    ]);
    const toTeacherMsg = (id) => {
      router.push(`/TeacherMsg/${id}`);
    };
    return { TeacherList, toTeacherMsg };
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
  .teacherList {
    color: #636363;
    padding: 20px 0;
    .title {
      text-align: center;
      font-size: 30px;
      line-height: 50px;
      font-weight: 650;
    }
    .teacherAll {
      width: 890px;
      display: flex;
      flex-wrap: wrap;
      font-size: 18px;
      .teacheritem {
        width: 20%;

        .img {
          display: block;
          width: 160px;
          height: 200px;
          margin: 20px auto;
        }
        .name {
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
</style>
