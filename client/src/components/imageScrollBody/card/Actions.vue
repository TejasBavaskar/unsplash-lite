<template>
  <div class="action-container">
    <div class="icon-box">
      <font-awesome-icon icon="heart" />
    </div>
    <div class="icon-box">
      <font-awesome-icon icon="plus" />
    </div>
    <div class="icon-box">
      <font-awesome-icon icon="cloud-download-alt" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Actions'
}
</script>

<style scoped>
.action-container {
  width: 100%;
  height: 40px;
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