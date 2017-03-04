<template>
    <div class="hero">
        <img
                class="hero__avatar"
                src="/img/avatar.png"
             :alt="hero.name">
        <h2 class="hero__name"> {{ hero.name }}</h2>
      <app-progress-bar :maxHp="hero.hp" :currentHp="hero.currentHp"></app-progress-bar>
        <p>HP: {{ hero.hp }}</p>
        <p>LVL: {{ hero.lvl }}</p>
        <p>EXP: {{ hero.exp }}</p>
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
        background: #065276;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
        &__avatar {
            width: 50px;
            height: 100px;
        }
         &__name {
        margin: 0;
        color: white;
        font-size: 32px;
          }
    }
    .hero__progress--hp {
        width: 100%;
        height: 25px;
        border-radius: 5px;
        background-color: transparent;
        margin: auto;
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