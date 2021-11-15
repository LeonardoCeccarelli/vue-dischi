<template>
  <div>
    <div class="loader_container">
      <div class="icon_loader spinner-border text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <span class="text_loader text-secondary">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: {
    text: String,
  },
};
</script>

<style>
</style>