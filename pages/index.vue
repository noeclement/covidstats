<template>
  <div class="home my-6">
    <div class="mb-3">Last updated: {{ lastUpdated }}</div>
    <CountrySearchbox/>
    <TotalDeathsFilter class="home__totalDeathsFilter" />
    <ContinentsFilter />
    {{ filteredCountries.length }} results
    <div class="home__listOfCountries">
      <CountryCard
        v-for="{ Country, CountryCode, TotalConfirmed, TotalDeaths, TotalRecovered, Date} in paginatedCountries" 
        :key="Country"
        :name="Country"
        :total-confirmed="TotalConfirmed"
        :total-deaths="TotalDeaths"
        :total-recovered="TotalRecovered"
        :last-updated="Date"
        :country-code="CountryCode.toLowerCase()"
      />
    </div>
    <br>
    <Pagination />
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
    ...mapGetters(['filteredCountries', 'lastUpdated', 'paginatedCountries'])
  },

  middleware: 'pagination'
}
</script>

<style lang="scss">
.home {
  &__listOfCountries {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    grid-gap: 20px;
  }
  &__totalDeathsFilter {
    width: 50%;
  }
}
</style>
