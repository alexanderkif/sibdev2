<template>
  <div class="login-form row justify-center">
    <div class="row full-width justify-center login-form__logo">
      <img src="~assets/form-logo.svg">
    </div>
    <div class="row full-width justify-center login-form__title">
      Вход
    </div>
    <div class="row full-width login-form__form">
      <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md full-width">
        <q-input
          ref="name"
          v-model="name"
          hint="Minimum 3 characters"
          label="Username *"
          counter
          outlined
          :rules="[
              val => !!val || '* Required',
              val => /^[а-яёa-z0-9]*$/i.test(val) || 'Letters and numbers only',
              val => val.length >= 3 || 'Please use minimum 3 characters'
            ]"
          lazy-rules
        />

        <q-input
          ref="password"
          v-model="password"
          :type="isPwd ? 'password' : 'text'"
          hint="Minimum 8 characters"
          label="Password *"
          counter
          outlined
          :rules="[
              val => !!val || '* Required',
              val => /^[а-яёa-z0-9!@#$%^&*]*$/i.test(val) || 'Letters, numbers, symbols only',
              val => val.length >= 8 || 'Please use minimum 8 characters'
            ]"
          lazy-rules
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <div class="text-center">
          <q-btn label="Войти" type="submit" color="primary" class="q-ml-xs login-form__btn" no-caps />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      name: '',
      password: '',
      isPwd: true
    }
  },
  created () {
    this.name = (this.getUser && this.getUser.name) || ''
    this.password = (this.getUser && this.getUser.password) || ''
  },
  methods: {
    onSubmit () {
      this.$refs.name.validate()
      this.$refs.password.validate()
      if (this.$refs.name.hasError || this.$refs.password.hasError) {
        this.formHasError = true
      } else {
        this.$store.dispatch('user/loginUser', { name: this.name, password: this.password })
          .then(res => {
            if (res.user) {
              this.$q.localStorage.set('user', res.user)
              this.$router.push('/')
            } else {
              this.$q.localStorage.set('user', undefined)
              this.$router.push('/login')
            }
          })
      }
    }
  },
  computed: {
    getUser () {
      return this.$store.getters['user/getUser']
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  width: 510px;
  height: 520px;
  background-color: #ffffff;
  padding: 40px 88px;

  &__logo {
    height: 88px;
    margin-bottom: 32px;
  }

  &__title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #000000;
    height: 28px;
    margin-bottom: 42px;
  }

  &__btn {
    width: 176px;
    height: 52px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
  }
}
</style>
