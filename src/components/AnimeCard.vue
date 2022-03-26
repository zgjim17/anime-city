<template>
  <div class="profili">
    <a @click="this.$router.push('/anime/' + anime.id)">
      <img :src="anime.poster" alt="d" />

      <p style="max-length: 3">
        {{ anime.name }}
      </p>
    </a>
    <!-- <br> {{anime.year}} -->
  </div>
</template>

<script>
export default {
  data() {},

  props: ["anime", "id"],
};
</script>

<style scoped>
.profili {
  cursor: pointer;
  display: flex;
  flex-direction: column;
 
  font-size: 0.9vw;

  justify-content: center;
  align-items: center;
 

  margin: 0 0.3vw 0.3vh 0.3vw;
   
}

.profili img {
  margin-bottom: 0.5vh;

  width: 8vw;
  height: 12vw;

  border-style: solid;
  border-radius: 2vw;
  border-color: rgb(154, 215, 255);
  border-width: 0.15vw;
}

.profili img:hover {
  border-color: #fb2b4f;
  margin-top: -0.5vw; 
  box-shadow: 0px 0px 1vw #fb2b4f;
}

p {
  width: 8vw;
  text-overflow: ellipsis;
   display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
}


@media screen and (max-width: 750px) {
  .profili{
    font-size: 1.5vw; 
     margin: 0 0.6vw 0.3vh 0.6vw;
  }

  .profili img {
    width: 16vw;
    height: 24vw;
  }

  p {
    width: 16vw; 
  }
}

</style>