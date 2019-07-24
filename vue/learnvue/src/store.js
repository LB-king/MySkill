import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    iGree: '2',
    iRadio: 6
  },
  mutations: {
    updataIgee(state, payload) {
      state.iGree = payload
    },
    updataIradio(state, payload) {
      state.iRadio = payload
    }
  },
  actions: {}
});