<template>
  <div class="navigation-bar" style="flex-basis: 100%">
    <!-- <h2>{{genreSelected}}</h2> -->
    <div class="grupimiGenre" >
      <li style="list-style: none" v-for="genre in genres" :key="genre">
        <router-link
          class="genre"
          :to="{ name: 'GenresPage', params: { id: genre } }"
        >
          {{ genre }}
        </router-link>
      </li>

      <!-- <a
        v-for="genre in genres"
        @click="this.$router.push('/genres/' + genre)"
        :key="genre"
        class="genres"
        >{{ genre }}</a
      > -->
    </div>
  </div>
  <div class="container">
    <div
      style="padding-top: 1vw"
      v-for="anime in animes
        .sort((a, b) => b.year - a.year)
        .filter((a) => a.genres.some((a) => a == genreSelected))"
      :key="anime"
    >
      <AnimeCard
        @click="this.$router.push('/anime/' + anime.id)"
        :anime="anime"
        :id="anime.id"
      />
    </div>

    {{ userId }}
  </div>
</template>

<script>
import AnimeCard from "../components/AnimeCard.vue";
// import { loadAnimes } from "./firebase";
import animesJSON from '@/assets/animes.json'
import { loadGenres } from "./firebase";
import { computed } from "vue";
// import axios from 'axios';
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const genreSelected = computed(() => route.params.id);

    const animes = animesJSON.animes

    // const fetchAnimes = () => {
    //   axios
    //     .get("http://localhost:3000/animes")
    //     .then(
    //       (res) => (
    //         (animes.value = res.data)
    //       )
    //     )
    // }

    // fetchAnimes()
 
 
 

    let genres = loadGenres();

    return { genreSelected, animes, genres };
  },
  components: {
    AnimeCard,
  },
};
</script>

<style scoped>
 

.container {
  max-width: 70vw;
  min-height: 100vh;
  /* margin-top: 4vh; */

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;

  padding: 0;
 margin-bottom: 10vw;
}

/* .grupimiGenre {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  height: 5vw;
  background-color: blue;
} */

.grupimiGenre {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1vw, 1fr));

  padding: 3%;
  /* background-color: blue; */
}

.genre {
  padding: 4% 15%;
  color: white;
  /* margin: 0 1vh 0 0; */
  /* padding: 0.5vw 0.6vw; */
  background-color: #14181c;
  text-decoration: none;
  font-size: 1vw;
  border-style: solid;
  border-width: 0.15vw;
  border-color: #fb2b4f;
  border-radius: 20px;
}

.genre:hover {
  background-color: #fb2b4f;
  color: #14181c;
}

.navigation-bar a.router-link-exact-active {
  color: #14181c;
  background-color: #fb2b4f;
  border-color: rgba(235, 235, 235, 0.404);
}

@media screen and (max-width: 750px) {
  .container {
    max-width: 100vw;
    margin-top: 5vh;
  }

  .genres {
    padding: 1vw;
    font-size: 2vw;
  }

  .navigation-bar {
    width: 100vw;
  }

  .grupimiGenre {
    height: 10vw;
    padding-top: 2vh;

    grid-template-columns: repeat(auto-fit, minmax(15vw, 1fr));
    justify-self: center;
    /* background-color: red; */
  }

  .genre{
    font-size: 0.5rem; 
  }
 

  .navigation-bar {
    width: 100vw;
    margin: auto;
  }
}
</style>