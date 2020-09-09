<template>
  <q-page class="flex fav">
    <div class="fav__wrapper full-width" >
      <div class="row fav__label" >
        Избранное
      </div>
      <div
        v-for="video in getFavoritesTitles"
        :key="video.index"
        class="fav__title row bg-white items-center q-px-md"
        @click="doRequest(video.q)"
      >
        <div>
          {{ video.name }}
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  methods: {
    doRequest (query) {
      this.$router.push({ path: '/', query: { q: query } })
    }
  },
  computed: {
    getFavoritesTitles () {
      return this.$q.localStorage.getItem(`sibdev2_fav_${this.getUser.name}`)
    },
    getUser () {
      return this.$store.getters['user/getUser']
    }
  }
}
</script>

<style lang="scss" scoped>
.fav {
  max-width: 1040px;
  margin: 40px auto;
  padding: 0 10px;

  &__label {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 52px;
    margin-bottom: 40px;
  }

  &__title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    height: 47px;
    border-bottom: solid 1px #F1F1F1;
  }
}
</style>
