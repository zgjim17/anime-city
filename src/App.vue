<template>
  <!-- <Header23 /> -->
  <Header />
  <!-- <HeaderBackUp /> -->
  <Footer />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Saira:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css");

#app {
  font-family: 'Saira', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white; 
  overflow-x: hidden; /*mos me lan me scroll anash */
  background-color: #14181c;
  

  /* me qito overflow nuk e lajna me u ba dy scrolla me ni faqe */
 overflow: hidden;
}

 

 
</style>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue' 
export default {
  components: {
      Header,
      Footer
    },
  setup() {
    
  },
}
</script>
