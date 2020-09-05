<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-white text-primary" height-hint="98">
      <q-toolbar style="width: 1040px; margin: 0 auto;">
        <q-avatar>
          <img src="~assets/panel-logo.svg">
        </q-avatar>
        <MainNav style="min-height: 50px;" />
        <q-btn flat color="primary" label="Flat" class="absolute-right" />
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
  data () {
    return {
    }
  }
}
</script>
