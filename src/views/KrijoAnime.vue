<template>
  <div class="container">
    <div><label>Name: </label><input type="text" v-model="form.name" /></div>
    <div>
      <label>Description: </label>
      <textarea
        name=""
        id=""
        cols="50"
        rows="10"
        v-model="form.description"
      ></textarea>
    </div>
    <div>
      <label>Rating: </label><input type="text" v-model="form.rating" />
    </div>
    <div><label>Year: </label><input type="text" v-model="form.year" /></div>
    <div>
      <label>Genre: </label><br>
      <div v-for="genre in genres" :key="genre" style="display: inline">
        <input type="checkbox" :value="genre" v-model="genreSelected" />
        {{ genre }}
      </div>
    </div>

    <div><label>Tv Show or Movie:</label>
      <label>Is it an important article?</label><br />
            <input
              type="radio"
              name="type"
              value="Tv Show"
              v-model="form.type"
            />
            <label>Tv Show</label><br />
            <input
              type="radio"
              name="type"
              value="Movie"
              v-model="form.type"
            />
            <label>Movie</label>
    </div>

    <div>
      <label>Anime Poster</label><input type="text" v-model="form.poster" />
    </div>
    <div>
      <label>Anime Background</label
      ><input type="text" v-model="form.background" />
    </div>
    {{ genreSelected }}
    <button @click="submitForm">Submit</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import axios from "axios";

export default {
  setup() {
    const genres = [
      "Adventure",
      "Romance",
      "Action",
      "Drama",
      "Fantasy",
      "Comedy",
      "Mystery",
      "Supernatural",
    ];

    const type = ["Tv Show", "Movie"];

    const genreSelected = ref([]);

    const form = reactive({
      genres: genreSelected,
    });

    const submitForm = () => {
      console.log(form);
      axios.post("http://localhost:3000/animes", form);
    };

    return { form, genres, type, submitForm, genreSelected };
  },
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  background-color: red;
}
</style>