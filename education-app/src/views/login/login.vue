<template>
  <div class="content">
    <div class="title">登录思政学习平台</div>
    <div class="input">
      <input class="content" type="text" placeholder="请输入账号" v-model="user.account" />
    </div>
    <div class="input">
      <input class="content" type="password" placeholder="请输入密码" v-model="user.password"  />
    </div>
    <div class="login" @click="handleLogin">提交</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive } from 'vue';
import { post } from '../../api';

export default {
  name: "Login",
  setup() {
    const user = reactive({
      account: '',
      password: '',
    })
    const router = useRouter();
    const handleLogin = async () => {
      const url = '/users/login'
      const response = await post(url, user)
      // 等价于
      // const response = await post(url, {
      //   account: user.account,
      //   password: user.password,
      // })

      if(response.errcode === 0) {
        localStorage.isLogin = true;
        router.push({ name: "Home" });
      } else {
        window.alert('登录失败');
      }
    };
    return { handleLogin, user };
  },
};
</script>

<style lang="scss" scoped>
.content {
  // width: 1800px;
  height: 700px;
  background-color: #eff8fc;

  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title {
  height: 33px;
  font-size: 40px;
  padding: 40px 0;
  margin-top: 85px;
  margin-bottom: 40px;
  font-weight: bold;
  color: #515155;
}
.input {
  width: 300px;
  height: 45px;
  margin: 0px 40px 25px 40px;
  padding: 0 20px;
  // box-sizing: border-box;
  background: #f9f9f9;
  border: 1px solid rgba(0, 0, 0, 0.1);
  .content {
    width: 100%;
    height: 100%;
    line-height: 100%;
    border: none;
    outline: none;
    background: none;
    font-size: 17px;
    color: #777;
    &::placeholder {
      color: #777;
    }
  }
}
.login {
  margin-top: 50px;
  width: 155px;
  height: 55px;
  line-height: 50px;
  text-align: center;
  background: #cc0001;
  color: white;
  font-size: 25px;
  cursor: pointer;
}
</style>
