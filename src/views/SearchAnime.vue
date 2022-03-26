<template>
  <div class="search">
    <input
      type="text"
      v-model="searching"
      id="searchTab"
      placeholder="Browse Animes"
    />
    <!-- <h4>You searched for {{searchTag}} </h4> -->
  </div>

  <div class="container" style="">
    <!-- <div
      style="padding-top: 1vw"
      v-for="anime in animes"
      :key="anime"
    >
      <AnimeCard :anime="anime" :id="anime.id" />
    </div> -->

    <div v-if="searching === null" class="container">
      <div
        style="padding-top: 1vw"
        v-for="anime in animes
          .sort((a, b) => b.year - a.year)
          .filter((a) => a.name.match(new RegExp(searchTag, 'i')))"
        :key="anime"
      >
        <AnimeCard :anime="anime" :id="anime.id" />
      </div>
    </div>

    <div
      style="padding-top: 1vw"
      v-for="anime in animes
        .sort((a, b) => b.year - a.year)
        .filter((a) => a.name.match(new RegExp(searching, 'i')))"
      :key="anime"
    >
      <AnimeCard :anime="anime" :id="anime.id" />
    </div>
  </div>
</template>

<script>
import AnimeCard from "../components/AnimeCard.vue"; 
import { computed } from "vue";
import { useRoute } from "vue-router";

import { ref } from "vue";
import axios from 'axios'

export default {
  setup() {
    const animes = ref(null)

    const fetchAnimes = () => {
      axios
        .get("http://localhost:3000/animes")
        .then(
          (res) => (
            (animes.value = res.data)
          )
        )
    }

    fetchAnimes()

    const route = useRoute();
    const searchTag = computed(() => route.params.searchTag);

    const searching = ref(null);

    return { animes, searchTag, searching };
  },

  components: {
    AnimeCard,
  },
};
</script>

<style scoped>
#searchTab {
  color: white;
  padding: 0.5vw;
  background-color: #14181c;
  text-decoration: none;
  font-size: 1vw;
  border-style: solid;
  border-width: 0.15vw;
  border-color: #fb2b4f;
  border-radius: 20px;
}

.search {
  /* background-color: red; */
  max-width: 70vw;
  margin: auto;
  padding: 4vw;
}

.container {
  max-width: 70vw;
  /* background-color: #084a8d; */
  color: white;
  /* height: 100vh; */
  /* margin-top: 10vh; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;

  padding: 0;
  /* margin-bottom: 10vw; */
}

@media screen and (max-width: 750px) {
  .container {
    max-width: 100vw;
    /* margin-top: 5vh; */
  }

  .search {
    max-width: 100vw;
  }

  #searchTab{
      font-size: 1em;
  }
}
</style>