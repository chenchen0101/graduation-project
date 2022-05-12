<template>
  <HomeHotSpot />
  <HomeCourse />
</template>

<script>
import HomeHotSpot from "../home/HomeHotSpot.vue";
import HomeCourse from "../home/HomeCourse.vue";
export default {
  name: "HomeMain",
  components: { HomeHotSpot, HomeCourse },
};
</script>

<style>
</style>