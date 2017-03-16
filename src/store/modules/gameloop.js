const state = {
	turns: 0,
	stacks: []
}
const mutations = {
	'NEXT_TURN'(state) {
		state.turns = state.turns + 1;
	},
	'STACK_ADD'(state, payload) {
		state.stacks.push(payload);
	},
	'CLOSE_LOOP'(state, payload) {
		state.turns = 0;
		state.stacks = [];
	}
}
const actions = {
	gameLoop({state, commit, dispatch, rootState}, payload) {

		state.stacks.forEach((elem, i) => {
			if (state.turns === state.stacks[i].turn) {
				dispatch(state.stacks[i].act, state.stacks[i].effect);
			}
		});
		/*	state.stacks.forEach((elem, i) => {
				dispatch(state.stacks[i].act, state.stacks[i].effect);
			});*/

		dispatch(payload.title);
		dispatch('takeHeroDamage', rootState.enemy.invokedEnemy.damage);
		commit('NEXT_TURN');
	},
	closeGameLoop({state, dispatch, commit}, payload) {
		//warn
		//cast all  lasts stacks
		state.stacks.forEach((elem, i) => {
			if (state.turns <= state.stacks[i].turn) {
				dispatch(state.stacks[i].act, state.stacks[i].effect);
			}
		});
		commit('CLOSE_LOOP');
	}
}
export default {
	state,
	mutations,
	actions
}