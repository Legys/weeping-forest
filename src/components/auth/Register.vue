<template>
    <div class="register-frame">
        <h1>Register</h1>
        <label for="login">Логин</label>
        <input type="text"
               name="login"
               class="login__input"
               v-model="login">
        <label for="password">Пароль</label>
        <input type="password"
               name="password"
               class="login__input"
               v-model="originPassword">
        <label for="password-repeat">Повторите пароль</label>
        <input type="password"
               name="password-repeat"
               class="login__input"
               v-model.lazy="repeatedPassword">
    
        <label for="email">E-mail</label>
        <input type="email"
               name="email"
               class="login__input"
               v-model.lazy='email'>
        <div class="buttons">
            <button class="register__button"
                    :disabled="!canRegister"
                    @click='register'>Зарегистрироваться</button>
            <a href="#"
               class="login__button--register"
               @click="changeForm">Логин</a>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
	export default {
    data() {
        return {
            login: '',
            originPassword: '',
            repeatedPassword: '',
            email: ''
        }
    },
    computed: {
        canRegister() {
            const samePasswords = this.repeatedPassword === this.originPassword && this.originPassword.length >= 6;
            return samePasswords && this.login.length >= 6;
        }
    },
    methods: {
        changeForm() {
            this.$emit('formWasChanged', 'appLogin')
        },
        register() {
            axios.post('/register', {
                login: this.login,
                password: this.originPassword,
                email: this.email
            })
                .then(data => {
                    console.log(data);
                    if (data.data === "login is engaged") {
                        throw new Error('login is engaged')
                    } else if (data.data === 'email is engaged') {
                        throw new Error('email is engaged');
                    }
                })
                .catch(err => {
                    console.log(err)
                    const errorString = err.toString();
                    this.$emit('authFailed', errorString);
                })
        }
    }
	}
</script>

<style scoped>
.register-frame {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
}

.buttons {
    margin-top: 25px;
    margin-bottom: 25px;
}

.register__button {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background: rgba(171, 90, 27, 0.72);
}
</style>
