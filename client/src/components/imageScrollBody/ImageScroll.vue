<template>
  <ImageCard />
</template>

<script>
import axios from 'axios';
import ImageCard from './card/ImageCard.vue';

export default {
  name: 'ImageScroll',
  components: {
    ImageCard
  },
  props: {
    searchVal: String,
  },
  mounted: function() {
    this.getImages();
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