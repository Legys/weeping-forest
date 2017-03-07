<template>
  <div class="road">
      <router-view></router-view>
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

<style scoped>
    .road {


    }

</style>
