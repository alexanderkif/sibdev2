<template>
  <q-layout view="hHh lpR fFf">

    <q-header v-show="getUser&&getUser.name" class="bg-white text-primary header" height-hint="98">
      <q-toolbar style="width: 1040px; margin: 0 auto;">
        <q-avatar>
          <img src="~assets/panel-logo.svg">
        </q-avatar>
        <MainNav style="min-height: 50px;" />
        <q-btn flat color="primary"
          label="Выйти"
          class="absolute-right header__btn"
          @click="logout"
          size="18px"
          no-caps />
      </q-toolbar>

    </q-header>

    <q-page-container class="bg-secondary">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import MainNav from '../components/MainNav'

export default {
  name: 'MainLayout',
  components: {
    MainNav
  },
  created () {
    const user = this.$q.localStorage.getItem('sibdev2_user')
    if (user && user.name && user.password) {
      // check user
      this.$store.dispatch('user/loginUser', { name: user.name, password: user.password })
        .then(res => {
          if (res.user) {
            this.$q.localStorage.set('sibdev2_user', res.user)
            if (this.$route.path !== '/') this.$router.push('/')
          } else {
            // user not found
            this.$q.localStorage.remove('sibdev2_user')
            this.$router.push('/login')
          }
        })
    } else {
      this.$router.push('/login')
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('user/exitUser')
      this.$q.localStorage.remove('sibdev2_user')
      this.$router.push('/login')
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
.header {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
}
</style>
