<template>
  <div class="nav">
    <div class="logo">
      <img src="../assets/anime.svg" alt="a" @click="this.$router.push('/')" />
    </div>

    <div class="navigation-bar" v-if="!mobile">
      <router-link to="/">Home</router-link>
      <router-link :to="{ name: 'GenresPage', params: { id: 'Adventure' } }"
        >Genres</router-link
      >
      <router-link :to="{ name: 'AnimesPage' }">Animes</router-link>
      <router-link :to="{ name: 'MoviesPage' }">Movies</router-link>
      <!-- <router-link :to="{ name: 'KrijoAnime' }">Create Anime</router-link>  -->
    </div>

    <div class="search">
      <form
        class="form-inline my-2 my-lg-0"
        style="display: flex; flex-direction: row"
      >
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="searchTag"
          style="margin-right: 1vw"
          v-on:keypress.enter="this.$router.push('/search/' + searchTag)"
        />
        <button
          class="btn butoni my-2 my-sm-0"
          type="submit"
          v-if="!mobile"
          @click="this.$router.push('/search/' + searchTag)"
        >
          Go
        </button>
      </form>

      <!-- <i
          class="bi bi-list"
          v-if="mobile"
          id="hamburgerIcon"
          style="color: white; font-size: 35px; padding-left: 2vw;"
        >
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li></i> -->
    </div>
    <div v-if="mobile" class="dropdown">
      <button class="dropbtn">
        <i class="bi bi-list" id="hamburgerIcon"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">Home</a>
        <a href="#/genres/Action">Genres</a>
        <a href="#/animes">Animes</a>
        <a href="#/movies">Movies</a>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import { ref, onBeforeUnmount } from "vue";

export default {
  // setup() {
  //   let mobile = false;

  //   return { mobile };
  // },

  setup() {
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

    return { mobile };
  },

  // data() {
  //   return {
  //     mobile: false,

  //     searchTag: "",
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
.butoni {
  color: #fb2b4f;
  border-color: #fb2b4f;
  border-radius: 15px;
}

.butoni:hover {
  color: white;
  background-color: #fb2b4f;
}

.nav {
  background-color: rgb(19, 19, 19);
  max-width: 100vw;
  height: 100px;
}

.logo {
  /* background-color: yellow; */
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navigation-bar {
  display: flex;
  flex-direction: row;
  padding-left: 1%;
  align-items: center;
}

.navigation-bar a {
  text-decoration: none;
  margin-right: 1vw;
  font-size: 2vw;
  text-transform: uppercase;
  font-weight: 300;
  color: white;
}

.navigation-bar a.router-link-exact-active {
  color: rgb(247, 46, 90);
  font-weight: 400;
}

img {
  max-height: 80%;
  /* margin-left: 30px; */
  max-width: 80px;
}

.navigation-bar {
  /* background-color: blue; */
  width: 68%;
}

.search {
  /* background-color: green; */
  width: 22%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding-right: 3vw;
  align-items: center;
}

@media screen and (max-width: 750px) {
  .nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .logo {
    width: 30vw;
    /* background-color: red; */
  }

  .search {
    /* background-color: blue; */
    width: 40vw;
    display: flex;
    justify-content: center;
  }

  .dropbtn {
    /* background-color: #14181c; */
    /* background-color: blue;   */
    background-color: #14181c;
    color: #fb2b4f;
    /* padding: 16px; */
    font-size: 1.3em;
    border-style: solid;
    border-width: 0.15vw;
    border-color: #fb2b4f;
    border-radius: 15px;

    cursor: pointer;
    padding: 1vw 4vw;
  }

  .dropdown {
    position: relative;
    display: inline-block;
    width: 25%;
    align-self: center;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    /* width: 100%; */
    background-color: #14181c;
    /* min-width: 160px; */
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding: 2vw;
    margin-left: 3vw;
  }

  .dropdown-content a {
    color: #fb2b4f;
    /* padding: 12px 16px; */
    padding: 0.4vw;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #fb2b4f;
    color: #14181c;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .nav {
    padding: 1vw;
  }
}
</style>