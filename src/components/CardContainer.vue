<template>
  <section>
    <div class="container">
      <SelectFilter
        :songArray="this.songList"
        @onChangeSelect="getFilteredArray"
      ></SelectFilter>
      <div
        class="
          row row-cols-1 row-cols-md-5
          gx-4
          gy-3
          my-4
          justify-content-center
        "
      >
        <SingleCard
          v-for="(song, i) in filteredSongList"
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
import SelectFilter from "./SelectFilter.vue";

export default {
  name: "CardContainer",
  components: {
    SingleCard,
    Loader,
    SelectFilter,
  },
  data() {
    return {
      songList: [],
      filteredSongList: [],
      checkLoader: true,
    };
  },
  methods: {
    getFilteredArray(genre) {
      if (genre === "Tutti") {
        this.filteredSongList = this.songList;
        return this.songList;
      }

      this.filteredSongList = this.songList.filter((song) => {
        return song.genre === genre;
      });
    },
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((resp) => {
        this.songList = resp.data.response;
        this.filteredSongList = this.songList;

        setTimeout(() => {
          this.checkLoader = false;
        }, 250);
      });
  },
};
</script>

<style>
</style>