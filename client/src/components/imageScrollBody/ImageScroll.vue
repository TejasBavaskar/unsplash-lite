<template>
  <div>
    <div v-for="(item, idx) in cardData" :key="idx">
      <ImageCard :cardData="item" />
    </div>
    <div class="text-center">
      <b-spinner label="Spinning"></b-spinner>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ImageCard from "./card/ImageCard.vue";

export default {
  name: "ImageScroll",
  components: {
    ImageCard,
  },
  mounted: function() {
    window.addEventListener("scroll", this.scrollHandler);
    this.getImages();
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.scrollHandler);
  },
  data() {
    return {
      cardData: [],
      pageCount: 1,
      isDataLoaded: false,
    };
  },
  computed: {
    getSearchValue: function() {
      return this.$store.state.searchValue;
    },
  },
  methods: {
    getImages: async function(page = 1) {
      const serverUrl = process.env.VUE_APP_SERVER_URL;
      try {
        const response = await axios.get(
          `${serverUrl}/api/search/photos?query=${this.getSearchValue}&page=${page}`
        );
        this.cardData.push(...response.data?.results);
      } catch (err) {
        console.error(err);
      }
    },
    scrollHandler: function() {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        this.getImages(++this.pageCount);
      }
    },
  },
  watch: {
    getSearchValue: function() {
      this.getImages();
      this.cardData = [];
    },
  },
};
</script>

<style scoped></style>
