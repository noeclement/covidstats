<template>
  <div class="home">
    <Pagination 
      position="top" 
      class="pt-3 pb-5" />
    <div class="home__listOfCountries px-2">
      <CountryCard
        v-for="{ Country, CountryCode, TotalConfirmed, TotalDeaths, TotalRecovered } in paginatedCountries" 
        :key="Country"
        :name="Country"
        :total-confirmed="TotalConfirmed"
        :total-deaths="TotalDeaths"
        :total-recovered="TotalRecovered"
        :country-code="CountryCode.toLowerCase()"
      />
    </div>
    <Pagination 
      position="bottom" 
      class="pt-5 pb-3" />
  </div>
</template>

<script>
import CountryCard from '@/components/CountryCard'
import Filters from '@/components/Filters'
import Pagination from '@/components/Pagination'
import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  components: {
    CountryCard,
    Filters,
    Pagination
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'countries',
      'currentPage',
      'filteredCountries',
      'pagesCount',
      'paginatedCountries'
    ])
  },
  middleware: 'pagination'
}
</script>

<style lang="scss">
.home {
  &__listOfCountries {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    grid-gap: 20px;
  }
}
</style>
