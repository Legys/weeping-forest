<template>
  <div class="rest">
    <div class="rest__frame">
      <h1 class="rest__title">
        Rest
      </h1>
      <ul class="rest__rests">
        <li
            class="rest__rest"
            v-for="(rest, i) in rests"
            >
          <img class="rest__image"
                  :src="rest.img"
               alt="rest.title"
              @click="heal(i)">
          <p class="rest__caption">{{ rest.title }}</p>
         </li>
      </ul>
    </div>


    </div>
</template>

<script>
  /*import Hero from '../hero/Hero.vue';*/
export default {
  data () {
    return {
      rests: [
        { id: 1, title: 'Flask', refillHp: 0.1, img: 'http://www.alcoholdesign.ru/wp-content/uploads/2011/02/putinka.jpg' },
        { id: 2, title: 'Bed', refillHp: 0.3, img: 'https://s-media-cache-ak0.pinimg.com/originals/cf/3d/99/cf3d999c69560a3d8251fe12aeb6ed6a.jpg' },
        { id: 3, title: 'Food', refillHp:  0.7, img: 'http://2.bp.blogspot.com/_QYd_pItgxVM/Sk5rfaEYzjI/AAAAAAAAAj8/iWxo8TviofQ/s400/Beautiful+Food+Art+Paintings+2.jpg' },
        { id: 4, title: 'Bless', refillHp:  1, img: 'http://il3.picdn.net/shutterstock/videos/9272675/thumb/1.jpg' },
      ]
    }
  },
	computed: {
		heroHp() {
          return this.$store.getters.hero.hp;
		}
	},
  methods: {
  	heal(i) {
  		this.$store.dispatch('healHero', this.rests[i].refillHp * this.heroHp);
    }
  },
  components: {
  	/*appHero: Hero*/
  }
}
</script>

<style lang="scss" scoped>
  .rest {
    margin-left: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;

  }
  .rest__frame {
    min-width: 300px;
    min-height: 300px;
    background: lightcyan;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
  }
  .rest__title {
    margin: 10px;

  }
  .rest__rests {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: flex-start;
  }
  .rest__rest {

    margin: 15px;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: center;

    border-radius: 5px;

  }
  .rest__image {
    width: 150px;
    height: 150px;
    border: 2px solid lightgray;
    border-radius: 15px;
  }
  .rest__caption {
    font-size: 36px;
  }

</style>
