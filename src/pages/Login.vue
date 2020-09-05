<template>
  <q-page class="flex flex-center">
    <div>
      <LoginForm />
      <div class="text-center text-caption q-mt-lg">
        * For demo: user1 password1
      </div>
    </div>
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
