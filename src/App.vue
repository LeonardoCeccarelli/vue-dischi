<template>
  <body>
    <Header></Header>
  </body>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "./styles/app.scss";
</style>
