<template>
  <body>
    <Header></Header>
    <CardContainer></CardContainer>
  </body>
</template>

<script>
import CardContainer from "./components/CardContainer.vue";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
    CardContainer,
  },
};
</script>

<style lang="scss">
@import "./styles/app.scss";
</style>
