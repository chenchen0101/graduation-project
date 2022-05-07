<template>
  <StaticPart />
  <HotSpot />
  <Main />
</template>

<script>
import StaticPart from "./StaticPart.vue";
import HotSpot from "./HotSpot.vue";
import Main from "./main.vue";
export default {
  name: "Home",
  components: { StaticPart, HotSpot, Main },
  setup() {},
};
</script>

<style lang="scss" scoped>
</style>