<template>
  <div class="inventory__frame">
    <h1>
      Inventory
    </h1>
    <ul class="inventory--list">
      <li class="inventory--list-item"
          v-for="item in inventory"
          :style="{border: '2px solid ' + item.rarity}">

        <img class="inventory__icon"
             :src="item.img"
             :alt="item.name">
        <span   class="item__amounts"
                v-if="item.amounts > 0">{{item.amounts}}</span>
      </li>

    </ul>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex';
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
    	inventory: 'inventory'
    })
  }
}
</script>

<style>
  .inventory__frame {
    margin-left: 50px;
    width: 300px;
    min-height: 300px;
    background-color: antiquewhite;

  }
  .inventory--list {

    padding: 5px;
    margin: 0;
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-content: flex-start;

  }
  .inventory--list-item {
    position: relative;
    width: 50px;
    height: 50px;
    background-color: gray;
    margin: 10px;
    border-radius: 5px;

  }
  .inventory__icon {
    width: 50px;
    height: 50px;
  }
  .item__amounts {
    position: absolute;
    bottom: 5px;
    right: 5px;
    color: blue;
    font-size: 14px;
    font-weight: bold;
  }
</style>
