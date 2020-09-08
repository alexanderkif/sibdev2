<template>
  <q-page class="flex search" :class="getMovies&&getMovies.length ? '' : 'flex-center'">
    <div class="search__control" :class="getMovies&&getMovies.length ? 'search__control_found' : ''">
      <div class="row search__label"
        :class="getMovies&&getMovies.length ? 'justify-start search__label_left' : 'justify-center'">
        Поиск видео
      </div>
      <form @submit.prevent.stop="onSubmit"
        class="row full-width inline justify-center search__form">
        <q-input
          ref="search"
          v-model="q"
          label="Что хотите посмотреть?"
          outlined
          class="search__input relative-position"
          :class="getMovies&&getMovies.length ? 'search__input_found' : ''"
        >
          <q-btn v-if="getMovies&&getMovies.length" flat round color="primary"
            class="search__heart-btn absolute-right" @click="addFavorite">
            <img v-if="getFavoritesQuery.includes(q)" src="~assets/heart-filled.svg" />
            <img v-else src="~assets/heart.svg" />
          </q-btn>
        </q-input>
        <q-btn label="Найти" type="submit" color="primary" size="20px" class="q-ml-none search__btn" no-caps />
      </form>
    </div>
    <SearchResults :lastQuery="lastQuery" />
    <q-dialog v-model="openFavModal" class="fullscreen flex flex-center search__fav-modal" >
      <FavModal :lastQuery="lastQuery" @close-fav-modal="openFavModal=false" />
    </q-dialog>
  </q-page>
</template>

<script>
import SearchResults from '../components/SearchResults'
import FavModal from '../components/FavModal'

export default {
  name: 'PageIndex',
  components: {
    SearchResults,
    FavModal
  },
  data () {
    return {
      q: '',
      lastQuery: '',
      maxResults: 12,
      showVideo: false,
      openFavModal: false
    }
  },
  mounted () {
    if (this.$route.query.q) {
      this.q = this.$route.query.q
      this.onSubmit()
    }
  },
  methods: {
    onSubmit () {
      this.lastQuery = this.q
      this.$store.dispatch('movie/getMovies', { maxResults: this.maxResults, q: this.q })
    },
    addFavorite () {
      if (this.lastQuery === '') return false
      if (this.getFavoritesQuery.includes(this.lastQuery)) {
        alert('Запрос уже сохранен.')
        return false
      }
      this.openFavModal = true
    }
  },
  computed: {
    getMovies () {
      return this.$store.getters['movie/getMovies']
    },
    getUser () {
      return this.$store.getters['user/getUser']
    },
    getFavoritesQuery () {
      if (this.getUser && this.getUser.name) {
        const favs = this.$q.localStorage.getItem(`sibdev2_fav_${this.getUser.name}`)
        if (favs) {
          return favs.map(el => el.q)
        } else return []
      } else return []
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

  &__heart-btn {
    height: 42px;
    margin: auto 0;
  }

  &__fav-modal {
    background-color: #75C7FF;
  }
}
</style>
