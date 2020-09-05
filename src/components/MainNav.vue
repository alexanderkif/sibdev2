<template>
  <q-tabs
    dense
    class="text-grey nav"
    active-color="primary"
    indicator-color="primary"
    narrow-indicator
  >
    <q-route-tab
      v-for="tab in tabs"
      :key="tab.index"
      :to="tab.to"
      :label="tab.label"
      class="nav__tab"
      no-caps
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
  }
}
</script>

<style lang="scss">
.q-tab__label {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
}
</style>
