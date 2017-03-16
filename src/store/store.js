import Vuex from 'vuex';
import Vue from 'vue'
import hero from './modules/hero';
import enemy from './modules/enemy';
import gameloop from './modules/gameloop';
import inventory from './modules/inventory';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {

	},
	mutations: {

	},
	actions: {

	},
	strict: true,
	modules: {
		hero,
		enemy,
		gameloop,
		inventory
	}
});
