import Vuex from 'vuex';
import Vue from 'vue'
import hero from './modules/hero';
import enemy from './modules/enemy';

Vue.use(Vuex);

export default new Vuex.Store({

	modules: {
		hero,
		enemy
	}
});
