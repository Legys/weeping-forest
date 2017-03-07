
const state = {
	hero: {
		name: 'y',
		hp: 100,
		damage: 15,
		currentHp: 63,
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

	}
}
const actions = {
	attack({state, rootState}, payload) {
		console.log('root', rootState.enemy.invokedEnemy);
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}