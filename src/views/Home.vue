<template>
  <div class="container">
    <div class="animet col-8" style="">
      <h2 style="flex-basis: 100%">Browse all Animes</h2>

      <div
        style="padding-top: 1vw"
        v-for="anime in animes
          .sort((a, b) => b.year - a.year)
          .filter((a) => a.type !== 'Movie')
          .slice(0, 10)"
        :key="anime"
      >
        <AnimeCard :anime="anime" :id="anime.id" />
      </div>

      <h2 style="margin-top: 3vw; flex-basis: 100%">Browse all Movies</h2>

      <div
        style="padding-top: 1vw"
        v-for="anime in animes
          .sort((a, b) => b.year - a.year)
          .filter((a) => a.type === 'Movie')
          .slice(0, 10)"
        :key="anime"
      >
        <AnimeCard :anime="anime" :id="anime.id" />
      </div>
    </div>

    <div class="lista col-4" style="">
      <h2>Top Rated Animes</h2>

      <table class="animeTable">
        <tr
          class="animeRow"
          v-for="anime in animes
            .sort((a, b) => b.rating - a.rating)
            .filter((a) => a.type !== 'Movie')
            .slice(0, 10)"
          :key="anime"
        >
          <router-link
            :to="{ name: 'AnimeProfile', params: { id: anime.id } }"
            style="text-decoration: none; color: white"
          >
            <td class="animeNeList" style="width: 15%">
              <img
                id="animeRowPicture"
                :src="require('@/assets/covers/' + anime.name + '.jpg')"
                alt=""
              />
            </td>
            <td class="animeNeList" id="animeRowName" style="width: 65%"><p>{{anime.name}}</p>
            </td>
            <td class="animeNeList" id="animeRowRating" ><p>{{anime.rating}}</p></td>
          </router-link>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import AnimeCard from "@/components/AnimeCard.vue";
// import { loadAnimes } from "../views/firebase";
import {ref} from 'vue'
import axios from 'axios'
// @ is an alias to /src

export default {
  setup() {
    // const animes = loadAnimes();

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

    return { animes };
  },

  components: {
    AnimeCard,
  },

  methods: {
    sortedArray() {
      return this.numberss.sort((a, b) => a - b);
    },
  },
};
</script>

<style scoped>
 

.animeTable {
  width: 90%;
  margin: auto;
  border-collapse: separate;
  border-spacing: 0 0.5vh; 

  
    table-layout: fixed;
}

.animeRow:hover {
  background-color: #fb2b4f;
  color: #14181c;
}

#animeRowPicture {
  width: 3vw;
}

.animeNeList {
  border: 0.15vw solid;
  border-color: #fb2b4f;
}

.container {
  max-width: 70vw;
  background-color: #14181c;
  color: white;
  /* height: 100vh; */
  margin-top: 10vh;
  display: flex;
  flex-direction: row;
}

.animet {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  /* height: 40vw;
  overflow: hidden; */
}

h2 {
  font-size: 2vw;
}

#animeRowName{
  vertical-align: center; 
  text-align: center;
}

td{
  height: 10px;
  overflow: hidden;
}

/* .animeTable td{
  max-height: 30px;
} */

 

@media screen and (max-width: 750px) {
  .container {
    max-width: 100vw;
    margin-top: 3vh;
    flex-direction: column;
    /* background-color: purple; */
  }
  .animet {
    width: 100%;
    /* background-color: blue; */
    /* flex-basis: 100%; */
  }

  h2{
    font-size: 4.5vw;
    text-align: left;
    padding-left: 5vw;
    padding-bottom: 1vw;
    
  }

  .lista{
    margin: 2vh 0 5vh 0;
    /* background-color: rgb(41, 183, 202); */
    width: 100%;
    overflow: hidden;
  }
 
  .animeTable{
    width: 100%; 
    /* padding: 0 5vw; */
    border-spacing: 0;  
    /* background-color: rgb(97, 199, 97); */
  }

  #animeRowPicture{
    width: 12vw;
  }

  p{
    font-size: 3.5vw;
/* qitu duhet me ndreq nashta se kur po bahen shkronjat ma tmdhaja po ka problem */

    /* width: 50vw; */
  }
  

  #animeRowName{
    /* background-color: red; */
    
  }

  #animeRowRating {

  }
   
}
</style>