<template>
  <div class="nav-container">
    <div class="logo-box">
      <img src="../../assets/logo.jpg" alt="" class="logo" />
    </div>
    <form class="search-box">
      <font-awesome-icon icon="search" />
      <input
        type="text"
        placeholder="Search"
        v-model="searchKeyWord"
        @keydown.enter.prevent="submitForm"
      />
    </form>
    <div class="menu-btn">
      <font-awesome-icon icon="bars" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      searchKeyWord: "",
    };
  },
  methods: {
    submitForm: function() {
      this.$store.commit("setSearchValue", this.searchKeyWord);
      this.searchKeyWord = "";
    },
  },
};
</script>

<style scoped>
.nav-container {
  width: 375px;
  height: 56px;
  background-color: #f7f7f7;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 2;
}

.logo-box {
  width: 130px;
  height: 100%;
  background-color: #f7f7f7;
  padding: 7px;
}

.logo-box img {
  width: 100%;
  height: 100%;
}

.search-box {
  width: 194px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.search-box input {
  width: 180px;
  height: 30px;
  border-radius: 15px;
  outline: none;
  border: 0;
  padding-left: 30px;
  background-color: #e2dede;
  color: #756f6f;
}

.search-box svg {
  color: #756f6f;
  position: absolute;
  left: 15px;
}

.menu-btn {
  width: 37px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
</style>
