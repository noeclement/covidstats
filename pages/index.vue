<template>
  <div class="home my-6">
    <div class="mb-3">Last updated: {{ lastUpdated }}</div>
    <b-icon 
      icon="fiber_manual_record" />
    <CountrySearchbox />
    <TotalDeathsFilter class="home__totalDeathsFilter" />
    <ContinentsFilter />
    <Pagination 
      class="my-5" 
      position="top" />
    <div class="home__listOfCountries">
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
      class="my-5" 
      position="bottom" />
  </div>
</template>

<script>
import ContinentsFilter from '@/components/ContinentsFilter'
import CountryCard from '@/components/CountryCard'
import CountrySearchbox from '@/components/CountrySearchbox'
import Pagination from '@/components/Pagination'
import TotalDeathsFilter from '@/components/TotalDeathsFilter'
import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  components: {
    ContinentsFilter,
    CountryCard,
    CountrySearchbox,
    Pagination,
    TotalDeathsFilter
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'countries',
      'currentPage',
      'filteredCountries',
      'lastUpdated',
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
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    grid-gap: 20px;
  }
  &__totalDeathsFilter {
    width: 50%;
  }
}
</style>
