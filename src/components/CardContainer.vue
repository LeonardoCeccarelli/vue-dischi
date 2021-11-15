<template>
  <section>
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

    <Loader :text="'Caricamento. . .'" v-if="checkLoader"></Loader>
  </section>
</template>

<script>
import axios from "axios";
import SingleCard from "./SingleCard.vue";
import Loader from "./Loader.vue";
export default {
  name: "CardContainer",
  components: {
    SingleCard,
    Loader,
  },
  data() {
    return {
      songList: [],
      checkLoader: true,
    };
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((resp) => {
        this.songList = resp.data.response;

        setTimeout(() => {
          this.checkLoader = false;
        }, 250);
      });
  },
};
</script>

<style>
</style>