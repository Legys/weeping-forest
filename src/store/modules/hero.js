
const state = {
	hero: {
		name: 'y',
		hp: 100,
		isAlive: true,
		damage: 45,
		currentHp: 85,
		exp: 1,
		levelUpExp: 1000,
		lvl: 1
	}
};
const getters = {
	hero(state, getters, rootState) {
		return state.hero;
	}
}
const mutations = {
	'SUBTRACT_HERO_HP'(state, payload) {
		state.hero.currentHp -= payload;
	},
	'HEAL_HERO'(state, payload) {
		state.hero.currentHp += payload;
	},
	'REFILL_ALL_HP' (state) {
		state.hero.currentHp = state.hero.hp;
	},
	'GAIN_EXP'(state, payload) {
		state.hero.exp += payload;
	},
	'SET_HERO_ALIVE'(state, payload) {
		state.hero.isAlive = payload;
	},
	'SET_HERO_HP'(state, payload) {
		state.hero.currentHp = payload;
	}
}
const actions = {
	/*attackEnemy({state, rootState}, payload) {
		rootState.enemy.invokedEnemy.currentHp -= payload;
	},*/
	takeHeroDamage({commit, state, rootState}, payload) {
		// warn
		if (state.hero.isAlive && rootState.enemy.invokedEnemy.isAlive) {
			commit('SUBTRACT_HERO_HP', payload);

			if (state.hero.currentHp <= 0 ) {
				commit('SET_HERO_ALIVE', false);
				commit('SET_HERO_HP', 0)
			}
		} else {
			console.log('nothing to do here')
		}
	},
	healHero({commit, state}, payload) {
		// multiple 'HEAL_HERO'
		const current = state.hero.currentHp,
					max = state.hero.hp;

		if (!state.hero.isAlive) {

			commit('SET_HERO_ALIVE', true);
			commit('HEAL_HERO', payload)

		} else if ( current + payload > max) {
			console.log('idi hanuy))');
			commit('REFILL_ALL_HP')
		} else {
			commit('HEAL_HERO', payload)
		}
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}