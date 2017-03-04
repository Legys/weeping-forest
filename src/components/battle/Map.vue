<template>
    <div class="map">
        <h1>This is Map</h1>
        <ul>
            <router-link
                        class="way"
                         :to="{ path: 'road/battle:1' }"
                        >1</router-link>
            <router-link
                        class="way"
                         :to="{ path: 'road/battle:2' }"
                        >2</router-link>
            <router-link
                         class="way"
                         :to="{ path: 'road/battle:3' }"
                        >3</router-link>
        </ul>
    </div>
</template>

<script>

	export default {
        data() {
        	return {
        		enemies: this.$store.getters.enemy
            }
        }

	}
</script>

<style>
    .map {
        margin-left: 50px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-content: center;
    }
    .way {
        width: 50px;
        height: 50px;
        background-color: red;

    }

   /* .battle__enemy-frame {
        margin-left: 50px;
        width: 300px;
        min-height: 300px;
        background: #065276;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;

    }
    .enemy__image {
        width: 90%;
    }*/
</style>
