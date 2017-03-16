const state = {
	inventory: [
		{  id: 2, name: 'Fecaley', img: 'http://somethingnavy.wpengine.netdna-cdn.com/wp-content/uploads/2016/09/snapcode.png', amounts: 5, rarity: 'blue', canStack: true },
		{ id: 3,  name: 'Sword', img: 'http://vignette4.wikia.nocookie.net/castlevania/images/0/05/Alucard_Sword_Icon.png/revision/latest/scale-to-width-down/120?cb=20150823045731', amounts: 0, rarity: 'red', canStack: false },
	],
	itemsDB: [
		{ id: 1, name: 'Souls', img: '../../../img/souls.jpg', amounts: 0, rarity: 'blue', canStuck: true },
		{ id: 2, name: 'Fecaley', img: 'http://somethingnavy.wpengine.netdna-cdn.com/wp-content/uploads/2016/09/snapcode.png', amounts: 0, rarity: 'blue', canStack: true },
		{ id: 3, name: 'Sword', img: 'http://vignette4.wikia.nocookie.net/castlevania/images/0/05/Alucard_Sword_Icon.png/revision/latest/scale-to-width-down/120?cb=20150823045731', amounts: 0, rarity: 'red', canStack: false }

	]
}
const getters = {
	inventory(state) {
		return state.inventory;
	}
}
const mutations = {
	'GOT_ITEM'(state, payload) {
		state.inventory.push(payload);
	},
	'THROW_ITEM'(state, payload) {

	}
}
const actions = {
	pickDrop({state, commit, getters}, payload) {
		const item = state.itemsDB.find((item) => {
			console.log(item, payload[0]);
			return item.id === payload[0];
		});
		commit('GOT_ITEM', item)
	}
}

export default {
	state,
	mutations,
	getters,
	actions
}