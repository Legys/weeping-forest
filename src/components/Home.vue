<template>
  <div>
    <header>
      <div class="container">
        <nav>
          <ul  class="gameframe__nav">
            <router-link class="gameframe__link"
                         to='/home/rest'
                         tag='li'>Rest</router-link>
            <router-link class="gameframe__link"
                         to='/home/road'
                         tag='li'>Road</router-link>
            <router-link class="gameframe__link"
                         to='/home/inventory'
                         tag='li'>inventory</router-link>
          </ul>
        </nav>
      </div>
    </header>
    <div class="gameframe__screen container">
      <!--<div class="app-hero&#45;&#45;wrap">-->
        <app-hero></app-hero>
     <!-- </div>-->
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
  import Hero from './hero/Hero.vue';
export default {
  data () {
    return {
    
    }
  },
  components: {
  	appHero: Hero
  }
}
</script>

<style lang="scss">
 /* .app-hero--wrap {
    margin-right: 35px;
  }*/
  header {
    /*background: #065276;*/
    background: #00254c;
    margin-bottom: 35px;
  }
  .gameframe__screen {

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .gameframe__nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-start;
  }
  .gameframe__link {
    color: #fff;
    padding: 25px 30px;

    &:hover {
      background: #064;
     }
  }
  .container {
    margin: auto;
    max-width: 1200px;
  }
</style>
