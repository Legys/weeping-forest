<template>
  <div>
<!--  <ul>
    <router-link to='/home' tag='li'>Home</router-link>
    <router-link to='/login' tag="li">Login</router-link>
  </ul> -->
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>

export default {
  data () {
    return {

    }
  }
}
</script>

<style>
    body {
        background-image: url('../img/The_Dark_Forest.png');
    }

</style>
