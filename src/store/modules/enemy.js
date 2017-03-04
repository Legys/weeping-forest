const state = {
	enemy: [
		{ id: 1, name: 'Spider', hp: 100, attack: 10, exp: 100, img: '../../img/forest_spider.png'},
		{ id: 2, name: 'Gnoll', hp: 70, attack: 35, exp: 200, img: ''},
		{ id: 3, name: 'Wolf', hp: 250, attack: 40, exp: 300, img: ''},
	]
};

const getters = {
	enemy(state) {
		return state.enemy;
	}
}
const mutations = {

}
const actions = {}

export default {
	state,
	getters,
}