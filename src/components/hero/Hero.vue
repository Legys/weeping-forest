<template>
    <div class="hero">
        <img
                class="hero__avatar"
                src="/img/avatar2.png"
             :alt="hero.name">
        <h2 class="hero__name"> {{ hero.name }}</h2>
      <app-progress-bar
              v-if="hero.currentHp >= 0"
              :maxHp="hero.hp"
              :currentHp="hero.currentHp">

      </app-progress-bar>
        <span
        class="status"
        v-if="hero.currentHp <= 0">Wasted</span>
        <ul class="hero__stats__list">
            <li class="hero__stats__item"> HP: {{ hero.hp }}</li>
            <li class="hero__stats__item"> Damage {{ hero.damage }}</li>
            <li class="hero__stats__item"> LVL: {{ hero.lvl }}</li>
            <li class="hero__stats__item"> EXP: {{ hero.exp }}</li>
        </ul>
        <div class="hero__lvlup" v-if="canGrowStats">
            <span v-if="notEnoughStats">Choose more stats ({{ 5 - incrCounts }})</span>
            <button @click="incrAttack"
                    :disabled="incrCounts >= 5">Attack++</button>
           + {{ attack }}
            <button @click="incrHp"
                    :disabled="incrCounts >= 5">HP++</button>
           + {{ hp }}
            <button @click="submitStats">OK</button>
        </div>


    </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import ProgressBar from '../shared/ProgressBar.vue';
    export default {
        data() {
        	return {
                attack: 0,
                hp: 0,
                incrCounts: 0,
                notEnoughStats: false
            }
        },
      methods: {
        incrAttack() {
          this.incrCounts++;
          this.attack += 5;
        },
        incrHp() {
          this.incrCounts++;
          this.hp += 40;
        },
        submitStats() {
        	if (this.incrCounts === 5) {
              this.$store.dispatch('afterNewLvl', {
                attack: this.attack,
                hp: this.hp
              })
              this.attack = 0;
              this.hp = 0;
              this.incrCounts = 0;
              this.notEnoughStats = false;
            } else {
        		this.notEnoughStats = true;
            }

        }
      },
      computed: {
        ...mapGetters({
          hero: 'hero',
          canGrowStats: 'canGrowStats'
        }),

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
    .status {
        font-size: 18px;
        margin: 0 auto;
        text-align: center;
        color: white;
    }
    .hero__lvlup {
        button {
            cursor: pointer;
        }
        button:disabled {
            cursor: not-allowed;
        }

    }
</style>