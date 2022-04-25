<template>
  <div class="main">
    <div class="course">
      <div class="tb">
        <ul>
          <li class="title">
            <a href="">思政课堂</a>
          </li>
          <li class="title">
            <a href="">必修课程</a>
          </li>
          <li class="title">
            <a href="">选修课程</a>
          </li>
          <li class="title">
            <a href="">特色课程</a>
          </li>
          <li class="title">
            <a href="">政论课程</a>
          </li>
        </ul>
      </div>
      <div class="nr" id="classall">
        <div class="kcnr">
          <a href="/course" class="cover">
            <img src="" alt="" class="img" />
          </a>
          <div class="name">
            <p class="title">
              <a href="" class="a">文化自信以社会主义</a>
            </p>
          </div>
        </div>
        <div class="kcnr">
          <a href="/course" class="cover">
            <img src="" alt="" class="img" />
          </a>
          <div class="name"></div>
        </div>
        <div class="kcnr">
          <a href="/course" class="cover">
            <img src="" alt="" class="img" />
          </a>
          <div class="name"></div>
        </div>
        <div class="kcnr">
          <a href="/course" class="cover">
            <img src="" alt="" class="img" />
          </a>
          <div class="name"></div>
        </div>
        <div class="kcnr">
          <a href="/course" class="cover">
            <img src="" alt="" class="img" />
          </a>
          <div class="name"></div>
        </div>
        <div class="kcnr">
          <a href="/course" class="cover">
            <img src="" alt="" class="img" />
          </a>
          <div class="name"></div>
        </div>
        <div class="kcnr">
          <a href="/course" class="cover">
            <img src="" alt="" class="img" />
          </a>
          <div class="name"></div>
        </div>
        <div class="kcnr">
          <a href="/course" class="cover">
            <img src="" alt="" class="img" />
          </a>
          <div class="name"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style lang="scss" scoped>
.main {
  .course {
    .tb {
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
    .nr {
      height: 450px;
      .kcnr {
        width: 295px;
        height: 200px;
        float: left;
        margin-right: 31px;
        margin-bottom: 30px;
        background: bisque;
      }
    }
  }
}
</style>
