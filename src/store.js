import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    user: [],
    hotels: [],
    comments: [],
    url1: "http://127.0.0.1:3000/",
    url: "https://afternoon-coast-58196.herokuapp.com/",
  },
  actions: {
    setHotels({ commit }) {
      axios
        .get(this.state.url + "v1/hotels")
        .then((response) => {
          commit("SET_HOTELS", response.data);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
    },
    setComments({ commit }) {
      axios
        .get(this.state.url + "v1/user_comment")
        .then((response) => {
          commit("SET_COMMENTS", response.data);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
    },
    setUser({commit},user){
      commit('SET_USER',user)
  },
  },

  mutations: {
    SET_HOTELS(state, hotels) {
      state.hotels = hotels;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_COMMENTS(state, comments) {
      state.comments = comments;
    },
  },
});
