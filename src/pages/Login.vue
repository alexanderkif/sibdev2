<template>
  <q-page class="flex flex-center">
    <LoginForm />
  </q-page>
</template>

<script>
import LoginForm from '../components/LoginForm'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>
