<template>
  <div>
    <div class="back-btn-container">
      <button class="back-btn" @click="goBack">
        <font-awesome-icon icon="long-arrow-alt-left" class="back-btn-icon" />
        <span>Back</span>
      </button>
    </div>
    <div class="image-container">
      <h3>{{ cardData.user.name }}</h3>
      <ImageInfoActions @download="download"/>
      <img :src="imageUrl" alt="" />
      <div class="image-details">
        <div class="description-share-container">
          <div class="description-box">
            <span id='description'>
              {{ cardData.alt_description | capitalize }}
            </span>
          </div>
          <div class="share-btn-box">
            <button class="share-btn" @click="shareImage">
              <font-awesome-icon icon="share-alt" class="share-icon" />
              Share
            </button>
          </div>
        </div>
        <div class="image-counts">
          <div class="count">
            <span class="views">
              <font-awesome-icon icon="eye" class="view-icon" />
              Views
            </span>
            <span>{{ getTotalViews }}</span>
          </div>
          <div class="count">
            <span class="likes">
              <font-awesome-icon icon="thumbs-up" class="likes-icon" />
              Likes
            </span>
            <span>{{ cardData.likes }}</span>
          </div>
          <div class="count">
            <span class="downloads">
              <font-awesome-icon
                icon="cloud-download-alt"
                class="downloads-icon"
              />
              Downloads
            </span>
            <span>{{ getTotalDownloads }}</span>
          </div>
        </div>
        <div class="publish-details">
          <font-awesome-icon icon="calendar" class="calendar-icon" />
          <span>Published on {{publishDate()}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getImageHeight from "../../utils/imageHeightCalculate.js";
import ImageInfoActions from "./actionsToolbar/ImageInfoActions.vue";
import dateFormat from '../../utils/dateFormat.js';
import downloadImage from '../../utils/downloadImage.js';

export default {
  name: "ImageInfo",
  components: {
    ImageInfoActions,
  },
  props: {
    cardData: Object,
    statisticsData: Object
  },
  methods: {
    publishDate: function() {
      console.log(this.$router.history);
      
      return dateFormat(this.cardData.created_at);
    },
    download: function() {
      console.log('Downloading... wwith data= ', this.cardData);
      downloadImage(this.cardData);
    },
    goBack: function() {
      window.history.back();
    },
    shareImage: function() {
      if(navigator.share) {
        const shareData = {
          title: 'Image',
          text: this.cardData.alt_description,
          url: window.location.href
        };
        navigator.share(shareData);
      } else {
        navigator.clipboard.writeText(window.location.href);
        alert('Copied');
      }     
    }
  },
  computed: {
    imageUrl: function() {
      console.log("cardData: ", this.cardData);
      console.log('Statistics data: ', this.statisticsData);
      return `${this.cardData?.urls?.raw}&q=75&auto=format&h=${getImageHeight(
        this.cardData
      )}`;
    },
    getTotalViews: function() {
      if(this.statisticsData?.views) {
        return this.statisticsData?.views?.total;
      }
      return 0;
    },
    getTotalDownloads: function() {
      if(this.statisticsData?.views) {
        return this.statisticsData?.downloads?.total;
      }
      return 0;
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value)
        return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style scoped>
.back-btn-container {
  width: 375px;
  height: 40px;
  display: flex;
  align-items: center;
}

.back-btn-container .back-btn {
  border: none;
  background-color: white;
  display: flex;
  align-items: center;
}

.back-btn-container .back-btn-icon {
  font-size: 1.5rem;
  margin: 0 10px;
}

.back-btn-container span {
  font-size: 1.1rem;
}

.image-container h3 {
  margin: 30px 0 0 10px;
  font-size: 1.5rem;
}

.image-container .image-details {
  width: 375px;
  display: flex;
  flex-direction: column;
}

 .image-details .description-share-container {
  width: 355px;
  margin: 10px;
  display: flex;
}

.description-share-container .description-box {
  width: 70%;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 600;
}

.description-share-container .share-btn-box {
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.description-share-container .share-btn-box .share-btn {
  width: 90px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 15px;
  background-color: blue;
  color: white;
  font-size: 1rem;
}

.share-btn-box .share-btn .share-icon {
  margin-right: 10px;
}

.image-details .image-counts {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
}

.image-details .image-counts .count {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.image-details .image-counts .count .views,
.image-details .image-counts .count .likes,
.image-details .image-counts .count .downloads {
  color: #767676;
  margin-bottom: 5px;
}

.image-details .image-counts .view-icon,
.image-details .image-counts .likes-icon,
.image-details .image-counts .downloads-icon {
  margin-right: 10px;
  color: #767676;
}

.image-details .publish-details {
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-bottom: 20px;
  font-size: 1rem;
  color: #767676;
}

.image-details .publish-details .calendar-icon {
  margin-right: 10px;
}
</style>