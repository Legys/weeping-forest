<template>
    <div class="battle">
        <app-controls>

        </app-controls>
        <div class="battle__enemy-frame">
            <h2>{{ enemy.name }}</h2>
            <img
                    class="enemy__image"
                    :src="enemy.img"
                    alt="enemy.name">
            <app-progress-bar :maxHp="enemy.hp" :currentHp="enemy.currentHp"></app-progress-bar>
        </div>
    </div>
</template>

<script>
	import ProgressBar from '../shared/ProgressBar.vue';
	import Controls from './Controls.vue';

    export default {
      computed: {
        enemy() {
          return this.$store.getters.enemy;
        }
      },
      created() {
        this.$store.dispatch('randomizeEnemy', +this.$route.params.id);
      },
      beforeRouteLeave(to, from, next) {
      	console.log('surrender?');

      	next();
      },
      components: {
        appProgressBar: ProgressBar,
        appControls: Controls
      }
    }
</script>

<style scoped>
    .battle {
        margin-left: 50px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
    }
    .battle__enemy-frame {
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
            height: 200px;
            border-radius: 5px;
            margin-bottom: 30px;
        }
</style>