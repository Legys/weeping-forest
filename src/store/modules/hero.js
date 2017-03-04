
const state = {
	hero: {
		name: 'Yobiy',
		hp: 150,
		damage: 15,
		currentHp: 150,
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
	'ATTACK'(state, paylod) {


	}
}
const actions = {}

export default {
	state,
	getters,
	mutations,
	actions
}