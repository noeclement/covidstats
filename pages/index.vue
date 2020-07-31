<template>
  <div class="home my-6">
    <div class="mb-3">Last updated: {{ $store.getters.lastUpdated }}</div>
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

export default {
  name: 'HomePage',
  components: { CountryCard, Pagination },
  async asyncData({ $axios }) {
    const summary = await $axios.$get('https://api.covid19api.com/summary')
    return {
      lastUpdated: summary.Date
    }
  },
  computed: {
    paginatedCountries() {
      console.log('pagesCount', this.$store.getters.pagesCount)
      return this.$store.getters.paginatedCountries(
        this.$store.getters.currentPage
      )
    }
  }
}
</script>

<style lang="scss">
.home {
  &__listOfCountries {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    grid-gap: 20px;
  }
}
</style>
