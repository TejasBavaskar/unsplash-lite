<template>
  <div class="card">
    <h3>Image Title</h3>
    <img src="../../../assets/dummy.jpg" alt="">
    <Actions /> 
  </div>
</template>

<script>
import Actions from './Actions.vue';

export default {
  name: 'ImageCard',
  components: {
    Actions
  }
}
</script>

<style scoped>
.card {
  width: 375px;
  height: 350px;
  background-color: white;
}

.card h3 {
  margin-left: 10px;
  padding: 5px;
}

.card img {
  width: 100%;
  height: 250px;
}
</style>