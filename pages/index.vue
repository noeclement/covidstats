<template>
  <div class="home my-6">
    <div class="mb-3">Last updated: {{ lastUpdated }}</div>
    <TotalDeathsFilter class="home__totalDeathsFilter" />
    {{ countries.length }} results
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
import CountryCard from '@/components/CountryCard'
import Pagination from '@/components/Pagination'
import TotalDeathsFilter from '@/components/TotalDeathsFilter'
import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  components: { CountryCard, Pagination, TotalDeathsFilter },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['countries', 'lastUpdated', 'paginatedCountries'])
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
