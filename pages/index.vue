<template>
  <div class="home">
    <div 
      v-for="(e, index) in 25" 
      :key="index">
      <CountryCard
        name="France" />
    </div>
  </div>
  
</template>

<script>
import CountryCard from '@/components/CountryCard'

export default {
  name: 'HomePage',
  components: { CountryCard },
  async asyncData() {
    let country = ''
    await fetch(
      'https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z'
    )
      .then(res => res.json())
      .then(res => {
        country = res[0].Country
      })
    return { country }
  }
}
</script>

<style lang="scss">
.home {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  @media only screen and (min-width: 960px) {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
