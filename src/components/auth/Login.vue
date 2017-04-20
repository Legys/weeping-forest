<template>
    <div class="login-frame">
        <h1>Login</h1>
        <label for="login">Логин</label>
        <input type="text"
               name="login"
               class="login__input"
               v-model="login">
        <label for="password">Пароль</label>
        <input type="password"
               name="password"
               class="login__input"
               v-model="password">
        <div class="buttons">
            <button class="login__button"
                    @click="enterGame">Войти</button>
            <a href="#"
               class="login__register"
               @click="changeForm">Регистрация</a>
        </div>
        <a href="#"
           class='login__guest'
           @click="enterGuest">Гость</a>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            login: '',
            password: '',
            canEnter: false
        }
    },
    methods: {
        changeForm() {
            this.$emit('formWasChanged', 'appRegister')
        },
        enterGame() {
            axios.post('/login', {
                login: this.login,
                password: this.password
            })
                .then(res => {
                    this.canEnter = res.data.canEnter;
                })
                .then(() => {
                    if (this.canEnter) {
                        this.$store.commit('AUTH', true);
                        this.$router.push('/home');
                    } else {
                        throw new Error('wrong password')
                    }
                })
                .catch(err => {
                    const errorString = err.toString();
                    this.$emit('authFailed', errorString);
                    console.log(err)
                })
        },
        enterGuest() {
            this.$store.commit('LOGIN_AS_GUEST', true);
            this.$router.push('/home')
        }

    }
}
</script>

<style>
.login-frame {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
    margin-bottom: 10px;
}

.login__button {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background: rgba(171, 90, 27, 0.72);
}

.buttons {
    margin-top: 20px;
}

.login__register {
    margin-left: 20px;
}

.login__guest {
    margin-top: 15px;
    align-self: flex-end;
    margin-right: 15px;
}
</style>
