<template>
  <button @click="getImages"></button>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ImageScroll',
  mounted: function() {
    this.getImages();
  },
  props: {
    searchVal: String,
  },
  data() {
    return {
      
    }
  },
  methods: {
    getImages: async function() {
      const serverUrl = process.env.VUE_APP_SERVER_URL;
      const response = await axios.get(`${serverUrl}/api/search/photos?query=${this.searchVal}&page=1`);
      console.log('Axios Data: ', response);
    }
  },
  watch: {
    searchVal: function() {
      this.getImages();
    }
  }
}
</script>

<style scoped>

</style>