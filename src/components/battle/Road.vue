<template>
  <div class="road">
      <app-map></app-map>
    </div>
</template>

<script>
    import ProgressBar from '../shared/ProgressBar.vue';
    import Controls from './Controls.vue';
    import Map from './Map.vue';
    export default {
      data () {
        return {

        }
      },
      mounted() {

      },
      components: {
      	appMap: Map
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
    background: blue;
    max-width: 100%;
    min-height: 300px;
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
