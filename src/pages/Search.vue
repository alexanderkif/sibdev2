<template>
  <q-page class="flex flex-center search">
    <div class="search__wrapper">
      <div class="row justify-center search__label">Поиск видео</div>
      <form @submit.prevent.stop="onSubmit"
        class="row full-width inline justify-center search__form">
        <q-input
          ref="search"
          v-model="q"
          label="Что хотите посмотреть?"
          outlined
          class="search__input"
        />
        <q-btn label="Найти" type="submit" color="primary" size="20px" class="q-ml-none search__btn" no-caps />
      </form>
      {{ results }}
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      q: '',
      maxResults: 12,
      results: ''
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('movie/getMovies', { maxResults: this.maxResults, q: this.q })
        .then(res => {
          this.results = res
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  max-width: 1040px;
  margin: 0 auto;

  &__wrapper {
    width: 686px;
  }

  &__label {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 52px;
    margin-bottom: 40px;
  }

  &__input {
    width: 536px;
  }

  &__btn {
    width: 150px;
  }
}
</style>
