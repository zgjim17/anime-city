<template>
  <div class="footerContainer">
    <div class="footer">
      <div class="kolonat" id="firstKolona">
        <img src="../assets/anime.svg" id="animeLogo" alt="" />
        <p
          style="
            font-size: 0.9rem;
            text-align: justify;
            margin: auto;
            color: white;
          "
        >
          Anime City is a top anime website where the community can check
          different anime informations and find new animes.
        </p>
      </div>

      <div v-if="!mobile" class="kolonat">
        <p style="font-size: 1.2rem">Quick Links</p>

        <div class="links">
          <a href="#/genres/Action">Action Animes</a>
          <a href="#/genres/Adventure">Adventure Animes</a>
          <a href="#/genres/Drama">Drama Animes</a>
          <a href="#/genres/Fantasy">Fantasy Animes</a>
          <a href="#/genres/Comedy">Comedy Animes</a><br />
          <a href="#/movies">Anime Movies</a>
          <a href="#/animes">Anime Tv Shows</a>
        </div>
      </div>

      <div class="kolonat" id="thirdKolona">
        <p style="font-size: 0.9rem">Follow us on Social Media for more:</p>
        <div>
          <a href=""> <i class="bi bi-facebook icons"></i></a>
          <a href=""> <i class="bi bi-instagram icons"></i></a>
          <a href=""> <i class="bi bi-twitter icons"></i></a>
        </div>
    <p>© Zgjim Gagica</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: false,

      searchTag: "",
    };
  },
  methods: {
    onResize() {
      if (window.innerWidth < 750) {
        this.mobile = true;
      } else {
        this.mobile = false;
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

<style scoped >
.footerContainer {
  background-color: rgb(19, 19, 19);
  color: #fb2b4f;
  /* color: orange; */
  max-width: 100vw;
  margin-top: 7vw;
}

.footer {
  /* background-color: yellow; */
  max-width: 70vw;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.kolonat {
  padding: 3vw;
  width: 33.33333%;
  overflow: hidden;
}

#animeLogo {
  width: 40%;
  margin-bottom: 1vw;
}

.icons {
  padding: 0.5vw;

  font-size: 2rem;
  color: white;
}

.icons:hover {
  color: #fb2b4f;
}

.links {
  display: flex;
  flex-direction: column;
}

.links a {
  text-decoration: none;
  color: white;
}

.links a:hover {
  color: #fb2b4f;
  font-weight: 600;
}

@media screen and (max-width: 750px) {
  .footerContainer {
    max-width: 100vw;
    padding: 0;
  }
  .footer {
    flex-direction: column;
    max-width: 100vw;
    /* background-color: red; */
  }

  .kolonat {
    /* background-color: blue; */
    width: 100%;
    padding: 0;
  }

  #animeLogo {
    width: 15vw;
    margin-right: 2.5vw;
  }

  #firstKolona {
    padding: 10vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .icons {
    padding: 4vw;
    font-size: 2.5rem;
  }

  #thirdKolona {
    margin-bottom: 5vw;
    margin-top: -2vw;
  }
}
</style>