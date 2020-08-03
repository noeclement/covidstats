<template>
  <div class="pagination">
    <div 
      v-if="position === 'top'" 
      class="mb-3">
      {{ resultsCount }}
    </div>
    <div class="pagination__buttons">
      <b-button 
        v-for="page in pagesCount"
        :key="page"
        :class="{'mx-1': true, 'is-primary': currentPage + 1 === page}" 
        @click="handlePageChange(page)">
        {{ page }}
      </b-button>
    </div>
    <div 
      v-if="position === 'bottom'" 
      class="mt-3">
      {{ resultsCount }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Pagination',
  props: { position: { type: String, default: 'top' } },
  computed: {
    ...mapGetters([
      'currentPage',
      'filteredCountries',
      'filteredCountriesCount',
      'pagesCount'
    ]),
    resultsCount() {
      const from = 24 * this.currentPage + 1
      let to = 24 * (this.currentPage + 1)
      const totalCount = this.filteredCountriesCount
      if (to > totalCount) to = totalCount
      return `Results ${from} - ${to} of ${totalCount}`
    }
  },
  methods: {
    handlePageChange(page) {
      this.$store.dispatch('set_currentPage', page - 1)
      this.$router.push({ query: { page } })
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-direction: column;
  &__buttons {
    display: flex;
    justify-content: center;
  }
}
</style>
