import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Rest from './components/rest/Rest.vue';

import Road from './components/battle/Road.vue';
import Battle from './components/battle/Battle.vue';


import Inventory from './components/inventory/Inventory.vue';


export const routes = [
    { path: '/login', component: Login },
    { path: '/home', component: Home, 
        children: [
        { path: 'rest', component: Rest},
        { path: 'road', component: Road, children: [
					{ path: 'battle', component: Battle }
        ]},
        { path: 'inventory', component: Inventory},
    ] },
];