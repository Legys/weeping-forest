<template>
    <div class="map--component">
        <div class="map">
            <ul class="list">
                <router-link
                        class="way"
                        v-for="(location, i) in locations"
                        :to="{path: `battle/${i}`, params: { id: i} }"
                        :key="i"
                        append

                >{{ i+1 }}</router-link>

            </ul>
        </div>

    </div>
</template>

<script>

	export default {
        data() {
        	return {
        		locations: this.$store.getters.locations
            }
        }

	}
</script>

<style lang="scss" scoped>

    .map {
        position: relative;
        margin-left: 50px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-content: center;
        background: blue;
        min-width: 699px;
        min-height: 560px;
        background: url('../../../img/map.jpg') no-repeat;
        background-size: contain;
        border-radius: 5px;

    }
    .list {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .way {
        width: 50px;
        height: 50px;
        background-color: darkgrey;
        color: #fff;
        text-decoration: none;
        opacity: 0.8;
        padding: 3px;
        border-radius: 50%;
        position: absolute;
        text-align: center;
        vertical-align: middle;

        &:nth-child(1) {
             top: 43px;
             left: 176px;
         }
         &:nth-child(2) {
              top: 97px;
              left: 221px;
         }
         &:nth-child(3) {
              top: 163px;
              left: 238px;
         }
         &:nth-child(4) {
              top: 263px;
              left: 238px;
         }

    }


</style>
