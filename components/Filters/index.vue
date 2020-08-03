<template>
  <div>
    <FilterByCountry class="py-4" />
    <FilterByContinent class="py-4" />
    <FilterByNumbers class="py-4" />
    <div class="has-text-centered py-4">
      <b-button @click="handleResetAll">
        Reset All
      </b-button>
    </div>
  </div>
</template>

<script>
import FilterByContinent from '@/components/Filters/FilterByContinent'
import FilterByCountry from '@/components/Filters/FilterByCountry'
import FilterByNumbers from '@/components/Filters/FilterByNumbers'
import Pagination from '@/components/Pagination'

export default {
  name: 'Filters',
  components: {
    FilterByContinent,
    FilterByCountry,
    FilterByNumbers,
    Pagination
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
