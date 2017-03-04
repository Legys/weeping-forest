<template>
    <div class="battle">
        <app-controls>

        </app-controls>
        <div class="battle__enemy-frame">
            <h2>{{ spider.name }}</h2>
            <img
                    class="enemy__image"
                    :src="spider.img"
                    alt="spider.name">
            <app-progress-bar :maxHp="100" :currentHp="spider.hp"></app-progress-bar>
        </div>
    </div>
</template>

<script>
	import ProgressBar from '../shared/ProgressBar.vue';
	import Controls from './Controls.vue';
    export default {
      computed: {
        spider() {
          return this.$store.getters.enemy[0];
        }
      },
      components: {
        appProgressBar: ProgressBar,
        appControls: Controls
      }
    }
</script>

<style>

</style>