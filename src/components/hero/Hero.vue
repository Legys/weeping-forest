<template>
    <div class="hero">
        <img
                class="hero__avatar"
                src="/img/avatar2.png"
             :alt="hero.name">
        <h2 class="hero__name"> {{ hero.name }}</h2>
      <app-progress-bar :maxHp="hero.hp" :currentHp="hero.currentHp"></app-progress-bar>
        <ul class="hero__stats__list">
            <li class="hero__stats__item"> HP: {{ hero.hp }}</li>
            <li class="hero__stats__item"> LVL: {{ hero.lvl }}</li>
            <li class="hero__stats__item"> EXP: {{ hero.exp }}</li>
        </ul>



    </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import ProgressBar from '../shared/ProgressBar.vue';
    export default {
        data() {
        	return {

            }
        },
      computed: {
        ...mapGetters({
          hero: 'hero'
        })
      },
      components: {
        appProgressBar: ProgressBar
      }
    }
</script>

<style lang="scss">
    /*some shit with style scoped. Look at progressBar.vue*/
    .hero {
        width: 300px;
        min-height: 300px;
        background: #064;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
        border-radius: 5px;

         &__name {
        margin: 0;
        margin-bottom: 10px;
        color: white;
        font-size: 32px;
          }
    }
    .hero__avatar {
        margin-top: 15px;
        width: 150px;
        height: 150px;
        border-radius: 5px;
        border: 2px solid lightgray;
    }
    .hero__stats__list {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .hero__stats__item {
        margin: 0;
        margin-top: 10px;
        font-size: 18px;
        color: white;

    }
    .hero__progress--hp {
        margin: 0 auto;

        width: 100%;
        height: 25px;
        border-radius: 5px;
        background-color: transparent;
        transition: width 500ms;
    }
    .hero__progress--dynamic {
        background: red;
        color: white;
        font-size: 16px;
        text-align: center;

    }
    .hero__hp--number {
        padding-top: 4px;
        display: block;
    }
</style>