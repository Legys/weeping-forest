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
        		let damage = this.$store.getters.hero.damage;
        		let enemy = {
                  ...this.$store.getters.enemy
                }
                enemy.currentHp -= damage;
        		console.log(enemy);
                /*this.$store.dispatch('attack', damage);*/
//                console.log(enemy.name, enemy.currentHp);

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