<template>
  <div class="action-container">
    <div class="like-box">
      <button class="icon-box">
        <font-awesome-icon icon="heart" />
      </button>
      <button class="icon-box">
        <font-awesome-icon icon="plus" />
      </button>
    </div>
    <div class="download-box">
      <button class="download-btn">
        <font-awesome-icon icon="cloud-download-alt" class="download-icon"/>
        Download
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageInfoActions'
}
</script>

<style scoped>
.action-container {
  width: 355px;
  height: 45px;
  margin: 5px 10px;
  display: flex;
  align-items: center;
}

.action-container .like-box {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

}

.action-container .like-box .icon-box {
  width: 39px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #C4C4C4;
  border-radius: 5px;
  margin-right: 15px;
}

.action-container .download-box {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.action-container .download-box .download-btn {
  width: 120px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #48BB35;
  background-color: #48BB35;
  color: white;
  border-radius: 15px;
  font-size: 1rem;
  padding: 5px;
}

.action-container .download-box .download-btn .download-icon {
  margin-right: 5px;
}
</style>