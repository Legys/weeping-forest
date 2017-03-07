const state = {
	enemy: [
		[
			{ id: 1, name: 'Spider', hp: 100, attack: 10, exp: 100, img: '../../../img/forest_spider.png'},
			{ id: 2, name: 'Spiders', hp: 120, attack: 40, exp: 260, img: 'https://s-media-cache-ak0.pinimg.com/originals/ab/df/0f/abdf0f6bfc68dc65ea0e5fccfb10eab5.jpg'},
			{ id: 3, name: 'Hornet', hp: 70, attack: 15, exp: 140, img: 'http://227rsi2stdr53e3wto2skssd7xe.wpengine.netdna-cdn.com/wp-content/uploads/2014/09/hornet-queen-621x280.png'},
		],
		[
			{ id: 4, name: 'Gnoll', hp: 70, attack: 35, exp: 200, img: 'http://vignette3.wikia.nocookie.net/wowwiki/images/7/76/Hogger_art.jpg/revision/latest?cb=20070901143234'},
			{ id: 5, name: 'Wolf', hp: 250, attack: 40, exp: 300, img: 'http://zhurnal.lib.ru/img/l/lagosta_d_w/01-1/warg.jpg'},
		],
		[
			{ id: 6, name: 'Wolf', hp: 250, attack: 40, exp: 300, img: 'http://zhurnal.lib.ru/img/l/lagosta_d_w/01-1/warg.jpg'},
		]
	],
	invokedEnemy: {

	}
};

const getters = {
	enemy(state) {
		return state.invokedEnemy;
	}
}
const mutations = {
	'INVOKE_ENEMY' (state, payload) {
		state.invokedEnemy = payload;
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
			currentHp: enemy[commonPick].hp
		}
		console.log('seq', newEnemy);
		commit('INVOKE_ENEMY', newEnemy);
	}
}

export default {
	state,
	mutations,
	actions,
	getters,
}