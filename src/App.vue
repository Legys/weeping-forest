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
        background: url('../img/forest-background-2.jpg') no-repeat center;

    }

</style>
