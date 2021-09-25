<template>
  <div class="nav-container">
    <a href="/" class="logo-box">
      <img src="../../assets/logo.svg" alt="" class="logo" />
    </a>
    <form class="search-box">
      <font-awesome-icon icon="search" />
      <input
        type="text"
        placeholder="Search"
        v-model="searchKeyWord"
        @keydown.enter.prevent="submitForm"
      />
    </form>
    <div class="menu-container">
      <button class="menu-btn" @click="openMenu">
        <font-awesome-icon icon="bars" />
      </button>
      <div id="triangle-icon" class="triangle-icon">
        <font-awesome-icon icon="caret-up" />
      </div>
      <ul id="dropdown-menu" class="dropdown-menu">
        <li class="list">
          <a
            href="https://github.com/TejasBavaskar/unsplash-lite"
            target="_blank"
          >
            About this Project
          </a>
        </li>
        <li class="list">
          <a href="https://unsplash.com/documentation" target="_blank"
            >API Details</a
          >
        </li>
        <li class="list"><a href="/">Home</a></li>
        <li class="list"><a href="">Login</a></li>
      </ul>
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
    openMenu: function() {
      const triangleIcon = document.getElementById("triangle-icon");
      const dropDownMenu = document.getElementById("dropdown-menu");

      triangleIcon.classList.toggle("show");
      dropDownMenu.classList.toggle("show");
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
.menu-container {
  width: 37px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 22px;
  position: relative;
}

.menu-container .menu-btn {
  border: none;
  background-color: #f7f7f7;
}

.menu-container .dropdown-menu {
  height: 140px;
  width: 150px;
  display: none;
  position: absolute;
  top: 90%;
  right: -2px;
  background-color: black;
  border-radius: 3px;
  padding: 10px;
}

.menu-container .dropdown-menu.show {
  display: inline-block;
}

.menu-container .dropdown-menu .list {
  margin: 5px 0;
}

.menu-container .dropdown-menu .list a {
  text-decoration: none;
  color: white;
}

.menu-container .triangle-icon {
  position: absolute;
  display: none;
  top: 54%;
}

.menu-container .triangle-icon.show {
  display: inline-block;
}
</style>
