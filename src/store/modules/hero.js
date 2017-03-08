
const state = {
	hero: {
		name: 'y',
		hp: 100,
		damage: 15,
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
	'ATTACK'({state, rootState}, payload) {

	},
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
	}
}
const actions = {
	/*attackEnemy({state, rootState}, payload) {
		rootState.enemy.invokedEnemy.currentHp -= payload;
	},*/
	takeHeroDamage({commit}, payload) {
		commit('SUBTRACT_HERO_HP', payload)
	},
	healHero({commit, state}, payload) {
		const current = state.hero.currentHp,
					max = state.hero.hp;
		if ( current + payload > max) {
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