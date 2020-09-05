<template>
  <div class="q-pa-md">
    <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md">
      <q-input
        ref="name"
        v-model="name"
        filled
        hint="Minimum 3 characters"
        label="Username *"
        counter
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
        filled :type="isPwd ? 'password' : 'text'"
        hint="Minimum 8 characters"
        label="Password *"
        counter
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

      <div class="text-right">
        <q-btn v-if="getUser" label="logout" @click.stop="logout" color="primary" flat />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-xs" />
        <q-btn label="Submit" type="submit" color="primary" class="q-ml-xs" />
      </div>
    </form>
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
          .then(() => this.$router.push('/'))
      }
    },
    logout () {
      this.name = ''
      this.password = ''
      this.$store.dispatch('user/exitUser')
    },
    onReset () {
      this.name = null
      this.password = null
      this.$refs.name.resetValidation()
      this.$refs.password.resetValidation()
    }
  },
  computed: {
    getUser () {
      return this.$store.getters['user/getUser']
    }
  }
}
</script>
