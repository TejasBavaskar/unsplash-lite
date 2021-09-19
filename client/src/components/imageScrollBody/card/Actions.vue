<template>
  <div class="action-container">
    <button class="icon-box">
      <font-awesome-icon icon="heart" />
    </button>
    <button class="icon-box">
      <font-awesome-icon icon="plus" />
    </button>
    <button class="icon-box" @click="download">
      <font-awesome-icon icon="cloud-download-alt" />
    </button>
  </div>
</template>

<script>
import downloadImage from '../../../utils/downloadImage.js';

export default {
  name: 'Actions',
  props: {
    cardData: Object
  },
  methods: {
    download: function() {
      downloadImage(this.cardData);
    }
  }
}
</script>

<style scoped>
.action-container {
  width: 100%;
  height: 41px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.icon-box {
  width: 39px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #C4C4C4;
  border-radius: 5px;
}
</style>