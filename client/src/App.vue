<template>
  <div id="app">
    <Navbar @formSubmit="searchBind"/>
    <HomeImage />
    <ImageScroll :searchVal="searchValue"/>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue';
import HomeImage from './components/homeImage/HomeImage.vue';
import ImageScroll from './components/imageScrollBody/ImageScroll.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    HomeImage,
    ImageScroll
  },
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    searchBind: function(value) {
      this.searchValue = value;
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
