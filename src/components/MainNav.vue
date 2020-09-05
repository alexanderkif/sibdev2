<template>
  <q-tabs
    dense
    class="text-grey"
    active-color="primary"
    indicator-color="primary"
    narrow-indicator
  >
    <q-route-tab
      v-for="tab in tabs"
      :key="tab.index"
      :to="tab.to"
      :label="tab.label"
    />
  </q-tabs>
</template>

<script>

const tabs = [
  {
    label: 'Поиск',
    to: '/'
  },
  {
    label: 'Избранное',
    to: '/favorites'
  }
]

export default {
  name: 'MainNav',
  data () {
    return {
      tabs: tabs
    }
  },
  computed: {
    getUser () {
      return this.$store.getters['user/getUser']
    }
  }
}
</script>
