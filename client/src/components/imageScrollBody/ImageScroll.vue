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
  mounted: function() {
    this.getImages();
  },
  data() {
    return {
      cardData: {},
    }
  },
  computed: {
    getSearchValue: function() {
      return this.$store.state.searchValue;
    }
  },
  methods: {
    getImages: async function() {
      if(!this.getSearchValue) {
        this.$store.commit('setSearchValue', 'Sun');
      }

      const serverUrl = process.env.VUE_APP_SERVER_URL;
      try {
        const response = await axios.get(`${serverUrl}/api/search/photos?query=${this.getSearchValue}&page=1`);
        this.cardData = response.data?.results;
      } catch (err) {
        console.error(err);
      }
    }
  },
  watch: {
    getSearchValue: function() {
      this.getImages();
    }
  }
}
</script>

<style scoped>

</style>