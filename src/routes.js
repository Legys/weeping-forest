import Auth from './components/auth/Auth.vue';
import Home from './components/Home.vue';
import Rest from './components/rest/Rest.vue';

import Road from './components/battle/Road.vue';
import Map from './components/battle/Map.vue';
import Battle from './components/battle/Battle.vue';


import Inventory from './components/inventory/Inventory.vue';


export const routes = [
    { path: '/', component: Auth },
    { path: '/home', component: Home, 
        children: [
        { path: 'rest', component: Rest},
        { path: 'road', component: Road,
            children: [
					  { path: '', component: Map },
					  { path: 'battle/:id', component: Battle}
        ]},
        { path: 'inventory', component: Inventory},
    ] },
];