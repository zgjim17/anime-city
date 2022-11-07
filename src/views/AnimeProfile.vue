<template>
  <div class="backgroundi">
    <div v-if="anime.name" id="backImage" v-bind:style="{ backgroundImage: 'url(' + anime.background + ')' }">
      <!-- <img style="position:absolute;" src="https://i.ibb.co/5F8ym5Z/saz.png" alt=""> -->
      <img :src="anime.background" alt="" /> 
      
    </div>
    <div v-if="!mobile" class="container">
      <div class="row" style="margin-top: -5vh">
        <!-- padding top e bon 45vh te styles i qiti row nese nuk funksionon nalt -->
        <div class="col-sm-3 col-4" style="margin-bottom: 10vh">
          <img
            v-if="anime.name"
            class="fotojaanime"
            :src="anime.poster"
            alt=""
          />

          <div class="profileGenres">
            <a
              @click="this.$router.push('/genres/' + genre)"
              v-for="genre in anime.genres"
              :key="genre"
              class="genre"
              >{{ genre }}</a
            >
          </div>
        </div>

        <div
          class="col-sm-9 col-8"
          style="
            margin-top: 1vw;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          "
        >
          <div>
            <p class="profileName">
              {{ anime.name }} - 
            </p>
            <p class="profileYear">
              {{ anime.year }}
            </p>
          </div>
          <!-- <h1>{{ anime.name }}</h1> -->
          <h3 class="profileRating">
            {{ anime.rating }}
          </h3>

          <p class="profileDescription">
            {{ anime.description }}
          </p>
        </div>
      </div>
    </div>

    <div v-if="mobile" class="container">
      <div style="display: flex; flex-direction: row">
        <div class="profilePic">
          <h3 class="profileRating">
            {{ anime.rating }}
          </h3>
          <img
            v-if="anime.name"
            class="fotojaanime"
            :src="anime.poster"
            alt=""
          />
        </div>

        <div style="display: flex; flex-direction: column; width: 70%">
          <p class="profileName">
            {{ anime.name }}
          </p>
          <p class="profileYear">
            {{ anime.year }}
          </p>

          <div class="profileGenres">
            <a
              @click="this.$router.push('/genres/' + genre)"
              v-for="genre in anime.genres"
              :key="genre"
              class="genre"
              >{{ genre }}</a
            >
          </div>
        </div>
      </div>

      <div>
        <p class="profileDescription">
          {{ anime.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script scoped>
import { ref, onBeforeUnmount } from "vue";
import animesJSON from '@/assets/animes.json'
// import axios from 'axios'
// import { getAnime } from "./firebase";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const id = route.params.id;

    // const anime = ref(null);

    console.log(animesJSON)
    const anime = animesJSON.animes.find(anime => anime.id == id)
    console.log(animesJSON)

    // const fetchAnimeData = () => {
    //   fetch(`http://localhost:3000/animes/${id}`)
    //     .then((res) => res.json())
    //     .then((data) => (anime.value = data));
    // };

    console.log(anime);
    // fetchAnimeData();

    const mobile = ref();

    if (window.innerWidth < 750) {
      mobile.value = true;
    } else {
      mobile.value = false;
    }

    const onResize = () => {
      if (window.innerWidth < 750) {
        mobile.value = true;
      } else {
        mobile.value = false;
      }
    };

    window.addEventListener("resize", onResize);
    onBeforeUnmount(() => window.removeEventListener("resize", onResize));

   

    return { anime , mobile};
  },

  // data() {
  //   return {
  //     //id: this.$route.params.id, menyre tjeter me e marr ID
  //     mobile: false,
  //   };
  // },

  // methods: {
  //   onResize() {
  //     if (window.innerWidth < 750) {
  //       this.mobile = true;
  //     } else {
  //       this.mobile = false;
  //     }
  //   },
  // },

  // created() {
  //   window.addEventListener("resize", this.onResize);
  // },

  // beforeUnmount() {
  //   window.removeEventListener("resize", this.onResize);
  // },
};
</script>

<style scoped>
.backgroundi {
  /* background: linear-gradient(180deg, rgba(50, 51, 6, 0) 30vh, #14181c 50vh),
    url("../assets/backgroundImages/Naruto.jpg") center 50vh ; */

  /* background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 0, 0, 1), rgba(0, 0, 0, 0)); */

  /* background: linear-gradient(90deg, #14181c , red, blue 30vh, green),
    url("../assets/backgroundImages/Naruto.jpg") center 0vh ; */
  /* background: linear-gradient(90deg,blue, green 6vh); */
  background-color: red;
  background-color: #14181c;
  background-repeat: no-repeat;
  /* background-image: url("../assets/backgroundImages/Naruto.jpg"); */

  /* background: linear-gradient(90deg,#14181d 0,rgba(20,24,29,.986) .97%,rgba(20,24,29,.945) 2.07833333%,rgba(20,24,29,.883) 3.29666667%,rgba(20,24,29,.803) 4.60166667%,rgba(20,24,29,.711) 5.96666667%,rgba(20,24,29,.61) 7.365%,rgba(20,24,29,.504) 8.77166667%,rgba(20,24,29,.398) 10.16%,rgba(20,24,29,.296) 11.505%,rgba(20,24,29,.203) 12.78%,rgba(20,24,29,.122) 13.95833333%,rgba(20,24,29,.059) 15.01666667%,rgba(20,24,29,.016) 15.92833333%,rgba(20,24,29,0) 16.66666667%,rgba(20,24,29,0) 83.33333333%,rgba(20,24,29,.016) 84.07166667%,rgba(20,24,29,.059) 84.98333333%,rgba(20,24,29,.122) 86.04166667%,rgba(20,24,29,.203) 87.22%,rgba(20,24,29,.296) 88.495%,rgba(20,24,29,.398) 89.84%,rgba(20,24,29,.504) 91.22833333%,rgba(20,24,29,.61) 92.635%,rgba(20,24,29,.711) 94.03333333%,rgba(20,24,29,.803) 95.39833333%,rgba(20,24,29,.883) 96.70333333%,rgba(20,24,29,.945) 97.92166667%,rgba(20,24,29,.986) 99.03%,#14181d),linear-gradient(0deg,#14181d 0,#14181d 21.48148148%,rgba(20,24,29,.986) 23.63703704%,rgba(20,24,29,.945) 26.1%,rgba(20,24,29,.883) 28.80740741%,rgba(20,24,29,.803) 31.70740741%,rgba(20,24,29,.711) 34.74074074%,rgba(20,24,29,.61) 37.84814815%,rgba(20,24,29,.504) 40.97407407%,rgba(20,24,29,.398) 44.05925926%,rgba(20,24,29,.296) 47.04814815%,rgba(20,24,29,.203) 49.88148148%,rgba(20,24,29,.122) 52.5%,rgba(20,24,29,.059) 54.85185185%,rgba(20,24,29,.016) 56.87777778%,rgba(20,24,29,0) 58.51851852%); */
  /* box-shadow: inset 0px 0px 150px 150px rgba(207, 4, 4, 0.589); */
}

#backImage {
  max-width: 75vw;
  margin: auto;

  width: 75vw;
  /* margin-bottom: 4vw; */

  /* background-image: url("../assets/backgroundImages/Naruto.jpg"); */
  /* box-shadow: inset 0px 0px 10px rgba(204, 8, 8, 0.9); */
  box-shadow: 1px 1px 15px 20px #14181c inset;
  background-size: 75vw; 
   
}
#backImage img {
  width: 75vw;
  position: relative;
  z-index: -2;
}

.fotojaanime {
  border-style: solid;
  border-color: rgb(154, 215, 255);
  border-width: 0.15vw;
  border-radius: 3vw;

  box-shadow: 0 0 15px 5px rgba(92, 165, 255, 0.8);
}

.profileName {
  font-size: 2em;
  font-weight: 700;
  display: inline;
}

.profileRating {
  background-color: orange;
  padding: 10px;
  border-radius: 1.3vw;
}
.profileYear {
  font-size: 0.9rem;
  font-weight: 300;
  display: inline;
  margin-left: 0.5vw;
}

.profileDescription {
  text-align: justify;
  font-size: 1rem;
  white-space: pre-line;
}

.profileGenres {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-top: 2vh;
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

  cursor: pointer;
}

.genre:hover {
  background-color: #fb2b4f;
  color: #14181c;
}

.container {
  color: white;
  max-width: 70vw;
  /* background: linear-gradient(180deg, rgba(50, 51, 6, 0) 30vh, #14181c 50vh),
    url(https://images.performgroup.com/di/library/omnisport/21/fa/cristianoronaldo-cropped_1r1fwkihpthey116xepqrxp0qt.jpg?t=2047273423)
      center 0vh; */

  /* provo qito se e morra prej letterboxd inspect element */
}

img {
  width: 100%;
  height: auto;
}

@media screen and (max-width: 750px) {
  .container {
    display: flex;
    flex-direction: column;

    max-width: 100%;
    /* margin-top: 3vh; */
    padding-left: 6vw;
    padding-right: 6vw;
  }

  #backImage {
    max-width: 100%;
    background-size: 100vw;
    width: 100vw; 
    height: 39vw;
  }

  .profilePic {
    width: 30%;
    margin-right: 3vw;
  }

  .profileName {
    /* color: red; */
    text-align: left;
    /* font-size: 1.5rem; */
    font-size: 1.5rem;
    display: initial;
    font-weight: 500;
    /* background-color: blue; */
    margin: 0;
    margin-top: -1vw;
    text-align: start;
    /* padding-left: 1vw; */

    /* display: inline; */
  }

  .profileYear {
    /* padding-left: 1vw; */
    font-size: 0.8rem;
    text-align: left;

    margin: 0;
    display: inline;
    /* background-color: green; */
  }

  .profileGenres {
    /* background-color: orange; */
    align-self: center;
    /* margin: auto; */
    /* margin-top: -1vw; */
    width: 100%;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  }

  .profileDescription {
    /* background-color: red; */
    flex-direction: column;
  }

  .profileDescription {
    margin-top: 3vw;
    font-size: 0.8rem;
    /* width: 88vw; */
  }

  .profileRating {
    /* margin-right: 3vw; */

    font-size: 3vw;

    position: absolute;
    color: #fb2b4f;
    background-color: #14181c;
    margin: 1vw;

    padding: 1vw;
    border-style: solid;
    border-width: 0.2vw;
    /* box-shadow: 0 0 2vw 1vw rgb(154, 215, 255); */
    border-color: #fb2b4f;
    vertical-align: bottom;
    /* height: 60%; */
    margin-top: 30vw;
    /* margin-left: 17%; */
  }
}
</style>






 