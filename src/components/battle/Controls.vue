<template>
    <div class="controls">
        <button
                class="controls__attack"
                :disabled="!canAttack"
                v-for="skill in hero.hero.skills"
                @click="attack(skill)">{{ skill.title }}</button>
       <!-- <button
                class="controls__attack"
                :disabled="!canAttack"
                @click="specialAttack"></button>
        <button
                class="controls__attack"
                :disabled="!canAttack"
                @click="poisonedAttack">Poison</button>-->

    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
    	data() {
    		return {
            }
        },
    	computed: {
          ...mapState(["hero", "enemy"]),
            canAttack() {
               return this.hero.hero.isAlive && this.enemy.invokedEnemy.isAlive
            }
        },
        methods: {
        	attack(skill) {
        		let enemyDamage = this.$store.getters.enemy.damage;
        		let heroDamage = this.$store.getters.hero.damage;

        	    this.$store.dispatch('gameLoop', skill);
                /*this.$store.dispatch('takeHeroDamage', enemyDamage);
                this.$store.dispatch('takeEnemyDamage', heroDamage);
        	    this.$store.commit('NEXT_TURN');*/
            }
        },
        beforeDestroy() {

        }
    }
</script>

<style lang="scss">
    .controls {
    width:  70px;
    height: 300px;
    background-color:  #006644;
    border-radius: 5px;

        &__attack {
        margin-bottom: 10px;
        border-radius: 5px;
        width: 70px;
        height: 70px;
        border: none;
        color: white;
        background: rgba(255, 14, 26, 0.8) url("../../../img/sword.png") no-repeat center;
        background-size: 80%;

        &[disabled] {
        background-color: rgba(113, 121, 124, 0.67);
         }
        }
    }

</style>