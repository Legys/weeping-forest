<template>
    <div class="hero__progress--hp">
        <div
             v-if="this.currentHp > 0"
             class="hero__progress--dynamic
                        hero__progress--hp"
             :style="{width: progressHp}">
            <span  class="hero__hp--number">{{ currentHp }} HP</span>

        </div>
    </div>
</template>

<script>
    export default {
    	props: {
    		maxHp: {
    			type: Number
            },
            currentHp: {
    			type: Number
            }
        },
    	data() {
    		return {

            }
        },
      computed: {
        progressHp() {
          return (
          	Math.round(100 * this.currentHp) / this.maxHp) + '%';
        }
      }
    }
</script>

<style scoped>
    .hero__progress--hp {
        width: 100%;
    }

</style>