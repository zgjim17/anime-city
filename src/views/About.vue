<template>
  <div class="container"> 
    

  <CreateAnime/>
  </div>

  

</template>

<script>
import CreateAnime from '@/components/CreateAnime.vue'
 

export default {
    components: {
      CreateAnime,
      
    }
}
</script>

<style scoped>
  .container{
    max-width: 70vw;
  }
</style>