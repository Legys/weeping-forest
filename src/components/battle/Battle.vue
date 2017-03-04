<template>
  <div class="battle">
      <app-controls>

      </app-controls>
      <div class="battle__enemy-frame">
        <h2>{{ spider.name }}</h2>
          <img
                  class="enemy__image"
                  :src="spider.img"
               alt="">
          <app-progress-bar :maxHp="spider.hp" :currentHp="spider.hp"></app-progress-bar>
      </div>
    </div>
</template>

<script>
    import ProgressBar from '../shared/ProgressBar.vue';
    import Controls from './Controls.vue';
    export default {
      data () {
        return {

        }
      },
      mounted() {
        console.log(this.$store.getters.enemy[0].name);
      },
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
  .battle {
    margin-left: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-content: center;
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
    }
</style>
