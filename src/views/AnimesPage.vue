<template>
  <div class="container" style=" ">
    <div
      style="padding-top: 1vw; "
      v-for="anime in animes
        .sort((a, b) => b.year - a.year)
        .filter((a) => a.type !== 'Movie')"
      :key="anime"
    >
      <AnimeCard 
        :anime="anime"
        :id="anime.id"
      />
    </div> 
  </div>
</template>

<script>
import AnimeCard from "../components/AnimeCard.vue";
import animesJSON from '@/assets/animes.json'

export default {
  setup() {
    const animes = animesJSON.animes;

    return { animes };
  },

  components: {
    AnimeCard,
  },
};
</script>

<style scoped>
.container {
  max-width: 70vw;
  /* background-color: #084a8d; */
  color: white;
  min-height: 100vh;
  margin-top: 10vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;

  padding: 0;
  margin-bottom: 10vw;
}

@media screen and (max-width: 750px) {

.container{
  max-width: 100vw;
  margin-top: 5vh;
}
  
}
</style>