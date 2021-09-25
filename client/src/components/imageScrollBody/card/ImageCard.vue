<template>
  <div class="card">
    <h3>{{ cardData.user.name }}</h3>
    <router-link
      :to="{
        name: 'ImageDetails',
        params: {
          id: cardData.id,
          cardData: cardData,
        },
      }"
    >
      <img :src="thumbnailUrl" alt="" />
    </router-link>
    <Actions :cardData="cardData" />
  </div>
</template>

<script>
import Actions from "./Actions.vue";
import getImageHeight from "../../../utils/imageHeightCalculate.js";

export default {
  name: "ImageCard",
  components: {
    Actions,
  },
  props: {
    cardData: Object,
  },
  computed: {
    thumbnailUrl: function() {
      return `${this.cardData?.urls?.raw}&q=75&auto=format&h=${getImageHeight(
        this.cardData
      )}`;
    },
  },
};
</script>

<style scoped>
.card {
  width: 375px;
  margin-bottom: 30px;
  background-color: white;
  border: none;
}

.card h3 {
  margin-left: 10px;
  padding: 5px;
}

.card img {
  width: 100%;
}
</style>
