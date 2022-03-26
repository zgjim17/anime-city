<template>
  <div>
    <div
      v-for="{ id, name, year } in animes.sort((a, b) => b.name - a.name)"
      :key="id"
    >
      {{ name }}  <strong> {{ year }} </strong>

      <router-link :to="`/anime/${id}`">
        <button>Profile</button>
      </router-link>

      <button @click="deleteAnime(id)">
        <i class="bi bi-pencil-square">Delete</i>
      </button>
    </div>
  </div>
</template>

<script>
import { loadAnimes, deleteAnime } from "../views/firebase";

export default {
  setup() {
    const animes = loadAnimes();

    return { animes, deleteAnime };
  },
};
</script>

<style>
i {
  font-size: 1.2vw;
  color: rgb(211, 2, 2);
  font-weight: bold;
}
</style>

 

 