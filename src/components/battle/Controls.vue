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
        		let enemy = this.$store.getters.enemy;
                enemy[0].hp -= damage;
                this.$store.commit('ATTACK', damage);

                console.log('Spider', this.$store.getters.enemy[0].hp)

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