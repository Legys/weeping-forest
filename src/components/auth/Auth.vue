<template>
  <div class='auth-frame'>
    <keep-alive>
      <component :is="currentView"
                 @formWasChanged="currentView = $event"
                 @authFailed="error = $event">
      </component>
    </keep-alive>
    <app-auth-error :error='error'
                    v-if='error.length > 0'></app-auth-error>
  </div>
</template>

<script>
import Login from './Login.vue';
import Register from './Register.vue';
import AuthError from './AuthError.vue'

export default {
  data() {
    return {
      currentView: 'appLogin',
      error: ''
    }
  },
  watch: {
    error() {
      setTimeout(() => {
        this.error = '';
      }, 3500)
    }
  },
  components: {
    appLogin: Login,
    appRegister: Register,
    appAuthError: AuthError
  }
}
</script>

<style scoped>
.auth-frame {
  margin: 200px auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  background: antiquewhite;
  width: 300px;
  min-height: 300px;
}
</style>
