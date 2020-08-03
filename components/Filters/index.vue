<template>
  <div class="filters">
    <FilterByCountry class="py-4" />
    <FilterByContinent class="py-4" />
    <FilterByNumbers class="py-4" />
    <div class="has-text-centered py-4">
      <b-button @click="handleResetAll">
        Reset All
      </b-button>
    </div>
    <div class="filters__footnote mb-5">
      Data provided by <a 
        href="https://covid19api.com/" 
        target="__blank">Covid19api.com</a><br>
      Last update: {{ $moment(lastUpdated).fromNow() }}
    </div>
  </div>
</template>

<script>
import FilterByContinent from '@/components/Filters/FilterByContinent'
import FilterByCountry from '@/components/Filters/FilterByCountry'
import FilterByNumbers from '@/components/Filters/FilterByNumbers'
import Pagination from '@/components/Pagination'
import { mapGetters } from 'vuex'

export default {
  name: 'Filters',
  components: {
    FilterByContinent,
    FilterByCountry,
    FilterByNumbers,
    Pagination
  },
  computed: {
    ...mapGetters(['lastUpdated'])
  },
  methods: {
    handleResetAll() {
      this.$store.dispatch('reset_filters')
      this.$store.dispatch('set_currentPage', 0)
      this.$router.push({ query: { page: 1 } })
    }
  }
}
</script>

<style lang="scss" scoped>
.filters {
  &__footnote {
    position: fixed;
    bottom: 0;
  }
}
</style>
