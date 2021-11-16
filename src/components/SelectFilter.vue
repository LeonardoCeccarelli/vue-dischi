<template>
  <div class="select_container text-center m-auto w-25 mt-5">
    <h5>Filtra per <strong>Genere</strong></h5>
    <select
      v-model="filterValue"
      @change="onSelectFilterChange"
      class="form-select"
    >
      <option value="0" selected>Tutti</option>
      <option v-for="genre in filteredByGenre" :key="genre" :value="genre">
        {{ genre }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectFilter",
  props: {
    songArray: Array,
  },
  data() {
    return {
      filterValue: 0,
    };
  },
  methods: {
    onSelectFilterChange() {
      this.$emit("onChangeSelect", this.filterValue);
    },
  },
  computed: {
    filteredByGenre() {
      const genresList = [];
      this.songArray.forEach((el) => {
        const { genre } = el;

        if (!genresList.includes(genre)) {
          genresList.push(genre);
        }
      });

      return genresList;
    },
  },
};
</script>

<style>
</style>