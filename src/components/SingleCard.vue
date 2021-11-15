<template>
  <div class="col">
    <div class="card single_card">
      <img :src="url" class="card-img-top" alt="song image" />
      <div class="card-body">
        <h5 class="card-title mb-3">{{ title }}</h5>
        <p class="card-text m-0">{{ author }}</p>
        <p class="card-text m-0">{{ year }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleCard",
  props: {
    url: String,
    title: String,
    year: String,
    genre: String,
    author: String,
  },
};
</script>

<style>
</style>