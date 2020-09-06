<template>
  <q-page class="flex search" :class="results.length ? '' : 'flex-center'">
    <div class="search__control" :class="results.length ? 'search__control_found' : ''">
      <div class="row search__label"
        :class="results.length ? 'justify-start search__label_left' : 'justify-center'">
        Поиск видео
      </div>
      <form @submit.prevent.stop="onSubmit"
        class="row full-width inline justify-center search__form">
        <q-input
          ref="search"
          v-model="q"
          label="Что хотите посмотреть?"
          outlined
          class="search__input"
          :class="results.length ? 'search__input_found' : ''"
        />
        <q-btn label="Найти" type="submit" color="primary" size="20px" class="q-ml-none search__btn" no-caps />
      </form>
    </div>
    <div class="search__filter row full-width" v-show="results.length">
      Видео по запросу "<b>{{ lastQuery }}</b>"<span class="search__total">{{ total >= 1000000 ? '> 1 млн' : total }}</span>
    </div>
    <div class="search__results flex justify-around">
      <q-card
        class="search__card"
        v-for="res in results"
        :key="res.index"
        flat
      >
        <img class="search__img" :src="res.snippet.thumbnails.medium.url">

        <div class="search__card-title row">
          {{ res.snippet.title.length > 60 ? res.snippet.title.slice(0, 60)+'...' : res.snippet.title }}
        </div>

        <div class="search__card-descr">
          <div>{{ res.snippet.channelTitle }}</div>
          <div>{{ res.viewCount }}</div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      q: '',
      lastQuery: '',
      maxResults: 12,
      results: [],
      total: 0
    }
  },
  methods: {
    onSubmit () {
      this.lastQuery = this.q
      this.$store.dispatch('movie/getMovies', { maxResults: this.maxResults, q: this.q })
        .then(async res => {
          this.results = await Promise.all(await res.items.map(async el => {
            el.viewCount = await this.getViewCount(el.id.videoId || el.id.playlistId || el.id.channelId)
            return el
          }))
          this.total = res.pageInfo.totalResults
        })
    },
    async getViewCount (videoId) {
      const viewCount = await this.$store.dispatch('movie/getViewCount', videoId)
      return viewCount
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  max-width: 1040px;
  margin: 0 auto;

  &__control {
    width: 686px;
    padding: 40px 0;

    &_found {
      width: 1040px;
    }
  }

  &__label {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 52px;
    margin-bottom: 40px;

    &_left {
      font-size: 28px;
      margin-bottom: 12px;
    }
  }

  &__input {
    width: 536px;

    &_found {
      width: 890px;
    }
  }

  &__btn {
    width: 150px;
  }

  &__img {
    width: 245px;
    height: 138px;
    margin-bottom: 8px;
  }

  &__filter {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
  }

  &__total {
    color: rgba(23, 23, 25, 0.3);
    margin-left: 15px;
  }

  &__card {
    width: 245px;
    height: 226px;
    background-color: transparent;
    margin-bottom: 20px;
  }

  &__card-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    height: 32px;
    margin-bottom: 8px;
  }

  &__card-descr {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: rgba(23, 23, 25, 0.3);
  }
}
</style>
