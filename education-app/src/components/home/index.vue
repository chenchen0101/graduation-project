<template>
  <HomeHeader />
  <router-view></router-view>
</template>

<script>
import HomeHeader from "../home/HomeHeader.vue";
export default {
  name: "Home",
  components: { HomeHeader },
  setup() {},
};
</script>

<style lang="scss" scoped>
</style>