import Vuex from 'vuex';
import Vue from 'vue';
import hero from './modules/hero';
import enemy from './modules/enemy';
import gameloop from './modules/gameloop';
import inventory from './modules/inventory';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authorized: false,
    guest: false
  },
  getters: {
    auth(state) {
      return state.authorized;
    },
    guest(state) {
      return state.guest;
    }
  },
  mutations: {
    AUTH(state, payload) {
      state.authorized = payload;
    },
    LOGIN_AS_GUEST(state, payload) {
      state.authorized = payload;
    }
  },
  actions: {},
  strict: true,
  modules: {
    hero,
    enemy,
    gameloop,
    inventory
  }
});
