<template>
  <div class="search-results">
    <div class="search-results__filter row justify-between full-width" v-if="getMovies&&getMovies.length">
      <div class="flex items-center">
        Видео по запросу "<b>{{ lastQuery }}</b>"
        <span class="search-results__total">
          {{ getTotal >= 1000000 ? '> 1 млн' : getTotal }}
        </span>
      </div>
      <div>
        <q-btn flat round color="primary" class="q-ml-sm" @click="list=true" >
          <img src="~assets/list.svg" />
        </q-btn>
        <q-btn flat round color="primary" class="q-ml-sm" @click="list=false" >
          <img src="~assets/grid.svg" />
        </q-btn>
      </div>
    </div>
    <div class="search-results__results flex justify-around">
      <q-card
        class="search-results__card"
        :class="list ? 'search-results__card_list' : ''"
        v-for="res in getMovies"
        :key="res.index"
        flat
        @click="runVideoDialog(res.id.videoId)"
      >
        <img class="search-results__img" :src="res.snippet.thumbnails.medium.url"
          :class="list ? 'search-results__img_list' : ''">
        <div class="seatch-result__text" :class="list ? 'search-results__text_list' : ''">
          <div class="search-results__card-title row" :class="list ? 'search-results__card-title_list' : ''">
            {{ res.snippet.title.length > 50 && !list ? res.snippet.title.slice(0, 50)+'...' : res.snippet.title }}
          </div>

          <div class="search-results__card-descr" :class="list ? 'search-results__card-descr_list' : ''">
            <div>{{ res.snippet.channelTitle }}</div>
            <div>{{ res.viewCount }}</div>
          </div>
        </div>
      </q-card>
    </div>
    <q-page v-if="showVideo" class="fullscreen bg-transition flex flex-center" >
      <div class="fullscreen bg-black" style="opacity:0.7;"></div>
      <iframe id="ytplayer" type="text/html" width="640" height="360"
        :src="`https://www.youtube.com/embed/${video}?autoplay=1`"
        frameborder="0" style="z-index: 10000;" allow="autoplay, fullscreen" />
      <q-page-sticky position="top-right" :offset="[18, 18]" style="z-index: 10000;">
        <q-btn fab icon="close" color="primary" @click.stop="showVideo=false" />
      </q-page-sticky>
    </q-page>
  </div>
</template>

<script>
export default {
  name: 'SearchResults',
  props: {
    lastQuery: String
  },
  data () {
    return {
      showVideo: false,
      video: '',
      list: false
    }
  },
  methods: {
    runVideoDialog (videoId) {
      this.video = videoId
      this.showVideo = true
    }
  },
  computed: {
    getMovies () {
      return this.$store.getters['movie/getMovies']
    },
    getTotal () {
      return this.$store.getters['movie/getTotal']
    }
  }
}
</script>

<style lang="scss" scoped>
.search-results {
  padding: 0 10px;

  &__img {
    width: 245px;
    height: 138px;
    margin-bottom: 8px;

    &_list {
      width: 157px;
      height: 88px;
      display: inline-block;
    }
  }

  &__text {
    &_list {
      display: inline-block;
      margin-left: 20px;
    }
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
    max-width: 245px;
    height: 226px;
    background-color: transparent;
    margin-bottom: 20px;

    &_list {
      max-width: 690px;
      height: 88px;
      display: flex;
      flex-wrap: nowrap;
      width: 100%;
    }
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

    &_list {
      max-width: 510px;
      max-height: 40px;
      overflow: hidden;
    }
  }

  &__card-descr {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: rgba(23, 23, 25, 0.3);

    &_list {
      max-width: 510px;
      height: 40px;
    }
  }
}
</style>
