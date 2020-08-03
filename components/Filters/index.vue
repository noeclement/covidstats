<template>
  <div class="filters">
    <FilterByCountry class="py-3" />
    <FilterByContinent class="py-3" />
    <FilterByNumbers class="py-3" />
    <div class="has-text-centered py-3">
      <b-button @click="handleResetAll">
        Reset All
      </b-button>
    </div>
    <div class="mt-3">
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
