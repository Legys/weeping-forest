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
	/*'SET_TURNS'(state, payload) {
	 state.turns = payload;
	 },*/
	/*'TICK_TURN'(state, payload) {
	 state.turns -= payload;
	 }*/
}
const actions = {
	gameLoop({state, commit, dispatch, rootState}, payload) {

			state.stacks.forEach((elem, i) => {
				if (state.turns === state.stacks[i].turn) {
					dispatch(state.stacks[i].act, state.stacks[i].effect);
				}
			});
			switch (payload.type) {
			case 'blast': {
				dispatch(payload.title);
				dispatch('takeHeroDamage', rootState.enemy.invokedEnemy.damage);
				commit('NEXT_TURN');
			}
			case 'dot': {
				dispatch(payload.title);
				dispatch('takeHeroDamage', rootState.enemy.invokedEnemy.damage);
				commit('NEXT_TURN');
			}
		}
	},
	closeGameLoop({state}, payload) {

	}
}
export default {
	state,
	mutations,
	actions
}