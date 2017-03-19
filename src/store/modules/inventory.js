const state = {
	inventory: [
		{  id: 2, name: 'Fecaley', img: 'http://somethingnavy.wpengine.netdna-cdn.com/wp-content/uploads/2016/09/snapcode.png', amount: 5, rarity: 'blue', canStack: true },
		/*{ id: 3,  name: 'Sword', img: 'http://vignette4.wikia.nocookie.net/castlevania/images/0/05/Alucard_Sword_Icon.png/revision/latest/scale-to-width-down/120?cb=20150823045731', amount: 0, rarity: 'red', canStack: false },*/
	],
	itemsDB: [
		{ id: 1, name: 'Souls', img: '../../../img/souls.jpg', amount: 0, rarity: 'blue', canStack: true },
		{ id: 2, name: 'Fecaley', img: 'http://somethingnavy.wpengine.netdna-cdn.com/wp-content/uploads/2016/09/snapcode.png', amount: 0, rarity: 'blue', canStack: true },
		{ id: 3, name: 'Sword', img: 'http://vignette4.wikia.nocookie.net/castlevania/images/0/05/Alucard_Sword_Icon.png/revision/latest/scale-to-width-down/120?cb=20150823045731', amount: 0, rarity: 'red', canStack: false }

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
	'STACK_ITEM'(state, payload) {
		// warn
		// state.inventory.forEach((elem, i) => {
		// 	if(elem.id === payload.id) {
		// 		elem.amount = payload.amount;
		// 	}
		// })
		const whereStack = state.inventory.find((inv) => inv.id === payload.id);
		whereStack.amount += payload.amount;
	},
	'THROW_ITEM'(state, payload) {

	}
}
const actions = {
	pickDrop({state, commit, getters}, payload) {
		// { id: 1, amount: 1, chance: 70},
		const itemsToDrop = [];

		for (let i = 0; i < payload.length; i++) {
			let chance = Math.round(Math.random() * 100);
			// console.log('chance', chance, chance < payload[i].chance)
			if (chance < payload[i].chance) {
				let itemDB = state.itemsDB.find((item) => {
					return payload[i].id === item.id;
				})
				let item = {
					...itemDB
				}
				item.amount = payload[i].amount;
				itemsToDrop.push(item);
			}
		}
		// console.log('Items want to be dropped', itemsToDrop);

		// else if (elem.canStacn && isHere(elem) && elem.maxStack > inv.amounts) {
		//  commit('GOT_ITEM')
		// }
		itemsToDrop.forEach((elem, i, arr) => {
			console.log('included in inv',  isHere(elem));
			if (elem.canStack && isHere(elem)) {
				commit('STACK_ITEM', elem)
			} else if (elem.canStack && !isHere(elem)) {
				commit('GOT_ITEM', elem);
			} else if (!elem.canStack) {
				commit('GOT_ITEM', elem);
			}
		/*	 else */
		});
		
		function isHere(elem) {
			return state.inventory.some((inv) => inv.id === elem.id )
		}

		// function isHere(element) {
		// 	let found = true;
		// 	state.inventory.forEach((inv) => {
		// 		if (inv.id === element.id) {
		// 			found = true;
		// 		}
		// 	});
		// 	return found;
		// }
		/*const itemFromDB = state.itemsDB.find((item, i, arr) => {
				for (let i = 0; i < itemsToDrop.length; i++) {
					console.log(i);
					return itemsToDrop[i].id === item.id;
				}
		});
		console.log(itemFromDB);*/

		/*console.log('itemFromBD', itemFromDB);
		let itemToPick = {};

		const itemInventory = state.inventory.forEach((inv, i) => {

			if (inv.id === itemFromDB.id && inv.canStack === false) {
				itemToPick = {
					...itemFromDB
				};
				itemToPick.amounts = 1;
				commit('GOT_ITEM', itemToPick)

			} else if (inv.id === itemFromDB && inv.canStack === true) {
				itemToPick = {
					...itemFromDB
				};
				itemToPick.amounts = 3;
				commit('STACK_ITEM',)
			}

		});
*/

	}
}

export default {
	state,
	mutations,
	getters,
	actions
}