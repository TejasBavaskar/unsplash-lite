<template>
  <div>
    <div v-for="(item, idx) in cardData" :key="idx">
      <ImageCard :cardData="item"/>
    </div>
  </div>
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
      cardData: {},
    }
  },
  methods: {
    getImages: async function() {
      const serverUrl = process.env.VUE_APP_SERVER_URL;
      const response = await axios.get(`${serverUrl}/api/search/photos?query=${this.searchVal}&page=1`);
      this.cardData = response.data?.results;
      console.log('Axios Data: ', this.cardData);
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