<template>
  <q-card class="fav-modal q-pa-md">
    <q-card-section class="row items-center justify-center fav-modal__title">
      Сохранить запрос
    </q-card-section>
    <q-card-section class="row items-center">
      <q-input
        v-model="lastQuery"
        label="Запрос"
        filled
        class="fav-modal__query full-width"
        disable
      />
    </q-card-section>
    <q-card-section class="row items-center q-pt-lg">
      <q-input
        ref="name"
        v-model="name"
        label="Укажите название *"
        outlined
        class="fav-modal__name full-width"
        :rules="[
          val => !!val || '* Required'
        ]"
        lazy-rules=""
      />
    </q-card-section>
    <q-card-section class="row items-center">
      <q-select outlined v-model="sort" :options="options" label="Сортировать по" class="fav-modal_sort full-width" />
    </q-card-section>
    <q-card-section class="row items-center q-py-lg">
      <div class="col-8">
        <q-badge color="white" text-color="black">
          Максимальное количество
        </q-badge>
        <q-slider v-model="count" :min="0" :max="50"/>
      </div>
      <q-input
        ref="count"
        v-model="count"
        outlined
        class="fav-modal__count col-4 q-pl-lg text-center"
        :rules="[
          val => val > 0 || 'Должен быть больше 0',
          val => val < 51 || 'Должен быть не больше 50'
        ]"
      />
    </q-card-section>

    <q-card-actions align="center" class="row q-px-md" >
      <q-btn class="col" outline label="Не сохранять" color="primary" v-close-popup />
      <q-btn class="col" label="Сохранить" color="primary" @click="save" />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'FavModal',
  props: {
    lastQuery: String
  },
  data () {
    return {
      name: '',
      options: [
        'Без сортировки', 'От А до Я', 'От Я до А'
      ],
      sort: 'Без сортировки',
      count: 25
    }
  },
  methods: {
    save () {
      this.$refs.name.validate()
      this.$refs.count.validate()
      if (this.$refs.name.hasError || this.$refs.count.hasError) {
        return false
      }
      const item = {}
      item.name = this.name
      item.q = this.lastQuery
      let fav = this.$q.localStorage.getItem(`sibdev2_fav_${this.getUser.name}`) || []
      if (fav.length > this.count - 1) fav = fav.slice(0, this.count - 1)
      fav.push(item)
      if (this.sort === 'От А до Я') {
        fav = fav.sort((a, b) => {
          if (a.name > b.name) {
            return 1
          }
          if (a.name < b.name) {
            return -1
          }
          return 0
        })
      }
      if (this.sort === 'От Я до А') {
        fav = fav.sort((a, b) => {
          if (a.name > b.name) {
            return -1
          }
          if (a.name < b.name) {
            return 1
          }
          return 0
        })
      }
      this.$q.localStorage.set(`sibdev2_fav_${this.getUser.name}`, fav)
      this.$emit('close-fav-modal')
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
.fav-modal {
  position: relative;
  width: 510px;
  height: 573px;
  z-index: 10000;
  background: #FFFFFF;
  box-shadow: 0px 10px 50px rgba(19, 144, 229, 0.8);
  border-radius: 10px;

  &__title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
  }
}
</style>
