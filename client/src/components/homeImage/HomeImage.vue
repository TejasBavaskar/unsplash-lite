<template>
  <div class="img-container">
    <img src="../../assets/nature.jpg" alt="home image" class="main-img">
    <div class="main-text">
      <h2>UnSplash | lite</h2>
      <span>The internet’s source of freely-usable images. Powered by UnSplash APIs.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeImage',
}
</script>

<style scoped>
.img-container {
  width: 375px;
  height: 230px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-container img {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
}

.main-text {
  text-align: center;
}

.main-text h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
}

.main-text span {
  font-size: 1rem;
  color: white;
}
</style>