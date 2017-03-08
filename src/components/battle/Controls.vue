<template>
    <div class="controls">
        <button
                class="controls__attack"
                @click="attack">ATTACK!</button>
    </div>
</template>

<script>
    export default {
        methods: {
        	attack() {
        		let heroDamage = this.$store.getters.hero.damage;
        		let enemyDamage = this.$store.getters.enemy.attack;
        	    this.$store.dispatch('takeEnemyDamage', heroDamage);
                this.$store.dispatch('takeHeroDamage', enemyDamage);
            }
        }
    }
</script>

<style lang="scss">
    .controls {
        width:  70px;
        height: 300px;
        background-color: #2f56ff;

        &__attack {
        border-radius: 50%;
        width: 70px;
        height: 70px;
        background: red;
        border: none;
        color: white;
         }
    }
</style>