<template>
  <div>
    <Navbar />
    <ImageInfo :cardData="cardData" :statisticsData="statisticsData"/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue';
import ImageInfo from '@/components/imageInfo/ImageInfo.vue';
import axios from 'axios';

export default {
  name: 'ImageDetails',
  components: {
    Navbar,
    ImageInfo
  },
  props: {
    cardData: Object
  },
  data() {
    return {
      statisticsData: {}
    }
  },
  mounted: function() {
    this.fetchImageStatistics();
  },
  methods: {
    fetchImageStatistics: async function() {
      const serverUrl = process.env.VUE_APP_SERVER_URL;
      try {
        const response = await axios.get(`${serverUrl}/api/photo/statistics?id=${this.cardData.id}`);
        this.statisticsData = response.data;
      } catch (err) {
        console.error(err);
      }
    }
  }
}
</script>

<style scoped>

</style>