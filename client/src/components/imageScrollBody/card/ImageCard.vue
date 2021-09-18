<template>
  <div class="card">
    <h3>{{ cardData.user.name}}</h3>
    <img :src="thumbnailUrl" alt="" >
    <Actions /> 
  </div>
</template>

<script>
import Actions from './Actions.vue';

export default {
  name: 'ImageCard',
  components: {
    Actions
  },
  props: {
    cardData: Object,
  },
  data() {
    return {
      defaultHeight: 600,
      defaultWidth: 375,
      deviceWidth: window.innerWidth,
    }
  },
  methods: {
    calculateHeight: function() {
      const {height, width} =  this.cardData;
      this.defaultWidth = width / height * this.defaultHeight;

      if(this.defaultWidth >= this.deviceWidth) {
        this.defaultWidth = this.deviceWidth;
        this.defaultHeight = height / width * this.defaultWidth;
      }
      console.log('New height= ', this.defaultHeight, ' New Width= ', this.defaultWidth);

      //const cardDiv = document.querySelector('.card');
      //cardDiv.style.height = `${100 + this.defaultHeight}px`;

      return this.defaultHeight;
    }
  },
  computed: {
    thumbnailUrl: function() {
      return `${this.cardData?.urls?.raw}&q=75&auto=format&h=${this.calculateHeight()}`;
    },
    imageHeight: function() {
      return this.calculateHeight();
    }

  }
}
</script>

<style scoped>
.card {
  width: 375px;
  margin-bottom: 30px;
  background-color: white;
}

.card h3 {
  margin-left: 10px;
  padding: 5px;
}

.card img {
  width: 100%;
}
</style>