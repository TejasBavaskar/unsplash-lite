import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    searchValue: "Sun",
  },
  mutations: {
    setSearchValue(state, payload) {
      state.searchValue = payload;
    },
  },
});

export default store;
