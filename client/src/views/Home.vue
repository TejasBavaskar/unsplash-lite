<template>
  <div id="app">
    <Navbar />
    <HomeImage />
    <ImageScroll />
  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar.vue";
import HomeImage from "@/components/homeImage/HomeImage.vue";
import ImageScroll from "@/components/imageScrollBody/ImageScroll.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    HomeImage,
    ImageScroll,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
