<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-5 gx-4 gy-3 my-5">
      <SingleCard
        v-for="(song, i) in songList"
        :key="i"
        :url="song.poster"
        :title="song.title"
        :year="song.year"
        :genre="song.genre"
        :author="song.author"
      ></SingleCard>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SingleCard from "./SingleCard.vue";
export default {
  name: "CardContainer",
  components: { SingleCard },
  data() {
    return {
      songList: [],
    };
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((resp) => {
        this.songList = resp.data.response;
        console.log(this.songList);
      });
  },
};
</script>

<style>
</style>