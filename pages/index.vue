<template>
  <div class="home">
    <div class="mb-3">Last updated: {{ lastUpdated }}</div>
    <div class="home__listOfCountries">
      <div 
        v-for="(e, index) in countries" 
        :key="index">
        <CountryCard
          :name="e.Country" />
      </div>
    </div>
  </div>
  
  
</template>

<script>
import CountryCard from '@/components/CountryCard'

export default {
  name: 'HomePage',
  components: { CountryCard },
  async asyncData({ $axios }) {
    const summary = await $axios.$get('https://api.covid19api.com/summary')
    return {
      countries: summary.Countries,
      lastUpdated: summary.Date
    }
  }
}
</script>

<style lang="scss">
.home {
  margin-top: 40px;
  &__listOfCountries {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    grid-gap: 20px;
  }
}
</style>
