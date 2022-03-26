<template>


  <div v-if="profili.name">
    <!-- <img style=" height: 230px; width: 230px;" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/640px-Manchester_United_FC_crest.svg.png" alt=""> -->
    <img
      :src="(require('@/assets/backgroundImages/' + 'Naruto' + 'Shadow.jpg'))"
      alt=""
      id="backgroundImage"
    />
  </div>

  <div class="container">
    <div id="fotoDiv">
      <img
        v-if="profili.name"
        id="fotojaProfili"
        :src="require('@/assets/covers/' + profili.name + '.jpg')"
        alt=""
      />
    </div>

    <div id="titulliDiv">
      <h3>{{ profili.name }}</h3>
      <h5>{{ profili.year }}</h5>
    </div>

    <div id="vleresimiDiv">
      <h3 id="profileRating">
        {{ profili.rating }}
      </h3>
    </div>

    <div id="zhanretDiv">
      <div class="genres">
        <a
          @click="this.$router.push('/genres/' + genre)"
          v-for="genre in profili.genres"
          :key="genre"
          class="genre"
          >{{ genre }}</a
        >
      </div>
    </div>

    <div id="pershkrimiDiv">
      <p id="pershkrimiParagraf">{{ profili.description }}</p>
    </div>

    <div id="karakteretDiv">ka asfa asfa rakteret</div>
  </div>
</template>

<script scoped>
import { reactive, onMounted, computed } from "vue";
import { getAnime } from "./firebase";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.id);

    const profili = reactive({
      name: "",
      year: null,
      description: null,
      genres: [],
    });

    onMounted(async () => {
      const anime = await getAnime(userId.value);
      profili.name = anime.name;
      profili.year = anime.year;
      profili.description = anime.description;
      profili.genres = anime.genre;
      profili.rating = anime.rating;
      profili.type = anime.type;
    });

    return { profili };
  },
};
</script>


<style scoped>
#backgroundImage {
  max-width: 80vw;
  margin: auto;
}

.container {
  /* background-color: red; */
  max-width: 70vw;

  padding: 0;
  padding-top: 5vh;

  display: grid;
  grid-template-columns: 25% 10% 65%;
  /* grid-template-rows: 15% 57% 28%; */
  grid-template-rows: 13vh 35vh;
  /* grid-template-rows: 15vh 30vh; */

  /* grid-template-columns: repeat(8, 10%);
  grid-template-rows: repeat(8, 1fr); */
  /* grid-template-rows: repeat(auto-fit, minmax(50px, 1fr)) */

  overflow: hidden;

  margin-top: -5vw;
  margin-bottom: 10vw;
}

#fotoDiv {
  /* background-color: blue; */
  grid-row: 1/3;
  grid-column: 1/2;

  padding: 1vw;
}

#fotojaProfili {
  border-style: solid;
  border-color: rgb(154, 215, 255);
  border-width: 0.15vw;
  border-radius: 3vw;
  width: 15vw;

  box-shadow: 0 0 15px 5px rgba(31, 73, 125, 0.8);
}

#titulliDiv {
  /* background-color: black; */
  grid-column: 3/4;
  grid-row: 1/2;
  text-align: left;

  padding-top: 0.7vw;
  /* align-self: center; */
  /* padding: 1vw; */
}

#vleresimiDiv {
  /* background-color: brown; */
  grid-row: 1/2;
  grid-column: 2/3;
  padding: 1vw;
}

#vleresimiDiv h3 {
  background-color: #fb2b4f;
  box-shadow: 0 0 15px 1px #ffffff;
  /* font-size: 100%; */
  font-size: 2vw;

  color: #ffffff;
  /* padding: 10px; */

  border-radius: 1.3vw;
}

#zhanretDiv {
  /* background-color: blueviolet; */
  grid-row: 3/4;
  grid-column: 1/2;
}

#pershkrimiDiv {
  /* background-color: green; */
  grid-row: 2/3;
  grid-column: 2/4;

  padding: 1vw;
}

#pershkrimiParagraf {
  text-align: justify;
  font-size: 90%;
  /* padding-top: 2vh; */
}

#karakteretDiv {
  /* background-color: orange; */
  grid-row: 3/4;
  grid-column: 2/4;
}

.genres {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  /* margin-top: 2vh; */
}

.genre {
  margin: 1vh 1vh 0 0;
  padding: 0.3vw 0.6vw;
  color: white;
  background-color: #14181c;
  text-decoration: none;
  font-size: 0.75rem;
  border-style: solid;
  border-width: 0.15vw;
  border-color: #fb2b4f;
  border-radius: 20px;
}

.genre:hover {
  background-color: #fb2b4f;
  color: #14181c;
}

@media screen and (max-width: 750px) {
  .container {
    grid-template-columns: 37% 65%;
    /* grid-template-rows: 5vh 11vh 8vh; */
    grid-template-rows: 14% 10%;
    

    max-width: 100vw;

    margin-top: -7vh;
  }

  #backgroundImage {
    max-width: 100vw;
  }

  #fotoDiv {
    /* background-color: red; */
    grid-row: 1/4;
    padding-left: 3vw;
    /* grid-column: 1/2; */
  }

  #titulliDiv {
    grid-column: 2/3;
    grid-row: 1/2;
    padding-left:1vw;
    align-self: center;
  }
  #vleresimiDiv {
    grid-column: 2/3;
    grid-row: 2/3;
  }
  #zhanretDiv {
    grid-row: 3/4;
    grid-column: 2/3;
  }
  #pershkrimiDiv {
    grid-row: 4/5;
    grid-column: 1/3;

    padding-right: 4vh;
    padding-left: 3vh;
  }
  #karakteretDiv {
    grid-row: 5/6;
    grid-column: 1/3;
  }
  #fotojaProfili {
    width: 85%;
  }

  #vleresimiDiv h3 {
    padding: 2vw;
    font-size: 3vw;
    width: 20%;
    /* box-shadow: none; */
  }

  .genres{
    display: grid;
    padding-right: 6vw;
    grid-template-columns: repeat(auto-fit, minmax(16vw,1fr));
  }
}
</style>