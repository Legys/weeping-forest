<template>
    <div class="hero__progress--hp">
        <div class="hero__progress--dynamic
                        hero__progress--hp"
             :style="{width: progressHp}">
            <span class="hero__hp--number">{{ currentHp }} HP</span>

        </div>
    </div>
</template>

<script>

    export default {
    	props: ['maxHp', 'currentHp'],
    	data() {
    		return {

            }
        },
      computed: {
        progressHp() {
          return Math.round(this.currentHp * 100 / this.maxHp) + '%';
        }
      }
    }
</script>