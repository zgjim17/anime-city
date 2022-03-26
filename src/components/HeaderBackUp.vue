<template>
  <div id="nav">
    <div class="logoja" style="background-color: red;">
      <img src="../assets/anime.svg" alt="a" @click="this.$router.push('/')" />
    </div>

    <div class="links" v-if="!showHamburger">
      <router-link to="/">aaHome</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/">About</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
      <router-link :to="{ name: 'Home' }">Anime Profile</router-link>
    </div>

    <form
      class="form-inline my-2 my-lg-0"
      style="display: flex; flex-direction: row"
    >
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button
        class="btn btn-outline-success my-2 my-sm-0"
        type="submit"
        v-if="!showHamburger"
      >
        Search
      </button>
    </form>

    <div class="hamburgeri" style="display: flex; flex-direction: row">
      <i
        class="bi bi-list"
        id="hamburgerIcon"
        style="color: white; font-size: 35px"
      ></i>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      showHamburger: false,
    };
  },

  methods: {
    onResize() {
      if (window.innerWidth > 750) {
        this.showHamburger = false;
      } else {
        this.showHamburger = true;
      }
    },
  },

  created() {
    window.addEventListener("resize", this.onResize);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgb(19, 19, 19);
  height: 100px;
}

.links {
  margin-left: 20px;
  display: flex;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  /*font-size: 20px; /*nashta duhet me fshi */
  font-size: 1.5vw;
  margin-right: 5px;
  margin-left: 5px;
}

#nav img {
  max-height: 80%;
  margin-left: 30px;
  max-width: 80px;
  /* height: auto; */
}

#nav a.router-link-exact-active {
  color: rgb(185, 22, 22);
}
@media screen and (max-width: 750px) {
  #nav img {
    margin-left: 0px;
  }

  .links {
    flex-direction: column;
  }

  #nav a {
    font-size: 2vw;
  }
}
</style>