
const state = {
	hero: {
		name: 'y',
		hp: 100,
		isAlive: true,
		damage: 100,
		currentHp: 100,
		exp: 1,
		levelUpExp: 1000,
		lvl: 1,
		skills: [
			{ title: 'commonAttack', type: 'blast'},
			{ title: 'specialAttack', type: 'blast' },
			{ title: 'poisonedAttack', type: 'dot' },
			{ title: 'healMe', type: 'dot' },
			{ title: 'increaseAttack', type: 'buff' },
			{ title: 'passTurn', type: 'dot' },
		]
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
	},
	'INCREASE_HERO_DAMAGE'(state, payload) {
		state.hero.damage += payload;
	},
	'DECREASE_HERO_DAMAGE'(state, payload) {
		state.hero.damage -= payload;
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
	commonAttack({state, commit, dispatch}, payload) {
			const damage = state.hero.damage;
			dispatch('takeEnemyDamage', damage);
	},
	specialAttack({state, commit, dispatch}, payload) {
		dispatch('takeEnemyDamage', state.hero.damage * 2);
	},
	poisonedAttack({state, rootState, dispatch, commit}, payload) {
		const turnsStamp = rootState.gameloop.turns;

		commit('STACK_ADD', {
			turn: turnsStamp + 2,
			act: 'takeEnemyDamage',
			effect: state.hero.damage * 0.5
		});

		commit('STACK_ADD', {
			turn: turnsStamp + 4,
			act: 'takeEnemyDamage',
			effect: state.hero.damage * 1.5
		});
	},
	healMe({state, commit, rootState}, payload) {
		const turnsStamp = rootState.gameloop.turns;

		commit('STACK_ADD', {
			turn: turnsStamp + 1,
			act: 'healHero',
			effect: 30
		});
	},

	increaseAttack({state, commit, rootState }, payload) {
		const damageBuff = 100;
		const turnsStamp = rootState.gameloop.turns;

		commit('INCREASE_HERO_DAMAGE', damageBuff);
		commit('STACK_ADD', {
			turn: turnsStamp + 2,
			act: 'decreaseHeroDamage',
			effect: damageBuff
		});
	},
	decreaseHeroDamage({state, commit, rootState }, payload) {
	 commit('DECREASE_HERO_DAMAGE', payload);
	},

	passTurn({state, commit}, payload) {

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