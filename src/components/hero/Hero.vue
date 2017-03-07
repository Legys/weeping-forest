<template>
    <div class="hero">
        <img
                class="hero__avatar"
                src="/img/avatar2.png"
             :alt="hero.name">
        <h2 class="hero__name"> {{ hero.name }}</h2>
      <app-progress-bar :maxHp="hero.hp" :currentHp="hero.currentHp"></app-progress-bar>
        <p class="hero__stats">HP: {{ hero.hp }}</p>
           <p class="hero__stats">LVL: {{ hero.lvl }}</p>
           <p class="hero__stats">EXP: {{ hero.exp }}</p>
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
    .hero {
        width: 300px;
        min-height: 300px;
        background: #064;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
        border-radius: 5px;
        &__avatar {
            width: 50px;
            height: 100px;
        }
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
        min-height: 150px;
        border-radius: 5px;
        border: 2px solid lightgoldenrodyellow;
    }
    .hero__stats {
        margin: 0;
        margin-top: 10px;
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