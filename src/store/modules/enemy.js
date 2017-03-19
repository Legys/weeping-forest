const state = {
	enemy: [
		[
			{ id: 1, name: 'Spider', hp: 100, damage: 10, exp: 100,img: '../../../img/forest_spider.png', drop: [
				{ id: 2, amount: 1, chance: 70},
				{ id: 3, amount: 1, chance: 80},
			]},
			{ id: 2, name: 'Spiders', hp: 120, damage: 40, exp: 260, img: 'https://s-media-cache-ak0.pinimg.com/originals/ab/df/0f/abdf0f6bfc68dc65ea0e5fccfb10eab5.jpg', drop: [
				{ id: 1, amount: 2, chance: 70},
				{ id: 3, amount: 1, chance: 80},
			]},
			{ id: 3, name: 'Hornet', hp: 70, damage: 15, exp: 140, img: 'http://227rsi2stdr53e3wto2skssd7xe.wpengine.netdna-cdn.com/wp-content/uploads/2014/09/hornet-queen-621x280.png', drop: [
				{ id: 1, amount: 1, chance: 70},
				{ id: 3, amount: 1, chance: 80},
			]},
		],
		[
			{ id: 4, name: 'Gnoll', hp: 70, damage: 35, exp: 200, img: 'http://vignette3.wikia.nocookie.net/wowwiki/images/7/76/Hogger_art.jpg/revision/latest?cb=20070901143234', drop: [
				{ id: 1, amount: 1, chance: 70},
				{ id: 3, amount: 1, chance: 80},
			]},
			{ id: 5, name: 'Wolf', hp: 250, damage: 40, exp: 300, img: 'http://zhurnal.lib.ru/img/l/lagosta_d_w/01-1/warg.jpg', drop: [
				{ id: 1, amount: 1, chance: 70},
				{ id: 3, amount: 1, chance: 80},
			]},
		],
		[
			{ id: 6, name: 'Wolf', hp: 250, damage: 40, exp: 300, img: 'http://zhurnal.lib.ru/img/l/lagosta_d_w/01-1/warg.jpg', drop: [
				{ id: 1, amount: 1, chance: 70},
				{ id: 3, amount: 1, chance: 80},
			]},
		],
		[
			{ id: 7, name: 'Troll', hp: 1500, damage: 5, exp: 300, img: '../../../img/forest-troll.jpg', drop: [
				{ id: 1, amount: 1, chance: 70},
				{ id: 3, amount: 1, chance: 80},
			]},
		],
		[
			{ id: 8, name: 'ExpTroll', hp: 14, damage: 5, exp: 1000, img: '../../../img/forest-troll.jpg', drop: [
				{ id: 1, amount: 5, chance: 100},
				{ id: 2, amount: 3, chance: 70},
				{ id: 3, amount: 1, chance: 70},
			]},
		],
		[
			{ id: 9, name: 'Ded', hp: 1400, damage: 50, exp: 1000, img: '../../../img/lakemonster.jpg', drop: [
				{ id: 1, amount: 5, chance: 100},
				{ id: 2, amount: 3, chance: 70},
				{ id: 3, amount: 1, chance: 70},
			]},
			{ id: 10, name: 'Kukuruzniy', hp: 14, damage: 5, exp: 1000, img: '../../../img/forest-troll.jpg', drop: [
				{ id: 1, amount: 5, chance: 100},
				{ id: 2, amount: 3, chance: 70},
				{ id: 3, amount: 1, chance: 70},
			]},
		],
		[
			{ id: 11, name: 'Lake beast', hp: 11400, damage: 500, exp: 12000, img: '../../../img/lakemonster.jpg', drop: [
				{ id: 1, amount: 5, chance: 100},
				{ id: 2, amount: 3, chance: 70},
				{ id: 3, amount: 1, chance: 70},	
			]}
		],
	],
	invokedEnemy: {

	}
};

const getters = {
	enemy(state) {
		return state.invokedEnemy;
	},
	locations(state) {
		return state.enemy.length;
	}
}
const mutations = {
	'INVOKE_ENEMY' (state, payload) {
		state.invokedEnemy = payload;
	},
	'SUBTRACT_ENEMY_HP'(state, payload) {
		state.invokedEnemy.currentHp -= payload;
	},
	'SET_ENEMY_ALIVE'(state, payload) {
		state.invokedEnemy.isAlive = payload;
	},
	'SET_ENEMY_HP'(state, payload) {
		state.invokedEnemy.currentHp = payload;
	}
}
const actions = {
	randomizeEnemy({commit, state}, index) {
		const enemy = state.enemy[index];
		const commonPick = Math.floor(Math.random() * enemy.length);
		/*	let zero = 0,
		 two = 0,
		 one = 0;
		 for (let i = 0; i < 100000; i++) {

		 if (commonPick === 0)  {
		 zero++;
		 } else if (commonPick === 1) {
		 one++;
		 } else {
		 two++
		 }
		 }
		 console.log(`${zero} - zero : ${one} - one : ${two} - two`);*/
		const newEnemy = {
			...enemy[commonPick],
			currentHp: enemy[commonPick].hp,
			isAlive: true
		}
		commit('INVOKE_ENEMY', newEnemy);
	},
	takeEnemyDamage({commit, state, dispatch, rootState}, payload) {
		//warn
		const hero = rootState.hero.hero,
					enemy = state.invokedEnemy;

		if (enemy.isAlive && hero.isAlive) {
			commit('SUBTRACT_ENEMY_HP', payload);

			if (enemy.currentHp <= 0) {
				dispatch('defeatEnemy');
			}
		} else {
			console.log('Attention: takeEnemyDamage"s else was trigger; INFO:', payload);
		}
		/*commit('NEXT_TURN');*/
		// refactor this
	},
	defeatEnemy({commit, state, rootState, dispatch}, payload) {
		commit('SET_ENEMY_HP', 0);
		commit('SET_ENEMY_ALIVE', false);
		commit('GAIN_EXP', state.invokedEnemy.exp);
		dispatch('pickDrop', state.invokedEnemy.drop);
		if(rootState.hero.hero.exp >= rootState.hero.hero.levelUpExp) {
			dispatch('levelUp');
		}
	},
}

export default {
	state,
	mutations,
	actions,
	getters,
}