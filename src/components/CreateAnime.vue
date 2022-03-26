<template>
  <div>
    /*eventi submit prevent nuk e bon reload faqen mas submiti */
    <form @submit.prevent="onSubmit">
      <label>Emri i Animes</label>
      <input v-model="form.name" required /><br />

      <label>Year</label>
      <input v-model="form.year" /><br />

      <label>Description</label>
      <textarea
        class="form-control"
        v-model="form.description"
        required
        rows="3"
      >
      </textarea>

      <div v-for="genre in genres" :key="genre">
        <input type="checkbox" v-model="form.genre" :value="genre" />
        <label>{{ genre }}</label>
      </div>

      <div v-for="type in types" :key="type">
        <input type="radio" v-model="form.type" :value="type" />
        <label>{{ type }}</label>
      </div>

      <label>Vlersimi</label>
      <input v-model="form.rating" required /><br />

      <label>Image hala su ndreq</label>
      <input type="file" @change="fileSelected" />
      <br />
      <br />

      <button type="submit">Create Anime</button>
    </form>

    <br />
    <br />
    <br />
    <br />
    <br />

    <AnimeList />
  </div>
</template>

<script>
import AnimeList from "./AnimeList.vue";
import { createAnime } from "@/views/firebase";
import { reactive } from "vue"; 
// import { ref } from "vue"; 

export default {
  setup() {
    


// const storage = getStorage();
// const storageRef = ref(storage, 'some-child');

 

    const form = reactive({
      name: "",
      year: "",
      description: "",
      genre: [],
      characters: [], 
      // image: blobFile
    
    });



    // let blobFile = ref('');
    let selectedFile = "";

    const onSubmit = async () => {
 
      await createAnime({ ...form });
      form.name = "";
      form.year = "";
      form.description = "";
      form.genre = [];
    };

    const fileSelected = (event) => {
      selectedFile = event.target.files[0];
   

      //let fileArray = new File()
      // blobFile = new Blob([selectedFile], {type : 'image/svg+xml'});
      // const reader = new FileReader();
      // reader.readAsDataURL(blobFile);
     
      console.log( selectedFile);
    
    };

          
 

    let genres = [
      "Adventure",
      "Romance",
      "Action",
      "Drama",
      "Fantasy",
      "Comedy",
      "Mystery",
      "Supernatural",
    ];

    let types = ["Movie", "Tv Show"];

    return { form, onSubmit, numbers: [3, 4], fileSelected, genres, types };
  },
  components: {
    AnimeList,
  },
};
</script>

<style>
</style>