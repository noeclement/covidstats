<template>
  <div>
    <h2>Total Deaths (min.):</h2>
    <b-slider
      v-model="totalDeathsFilter"
      :min="0"
      :max="100000"
      :step="100"
      class="mb-6">
      <b-slider-tick :value="0">0</b-slider-tick>
      <b-slider-tick :value="20000">20,000</b-slider-tick>
      <b-slider-tick :value="40000">40,000</b-slider-tick>
      <b-slider-tick :value="60000">60,000</b-slider-tick>
      <b-slider-tick :value="80000">80,000</b-slider-tick>
      <b-slider-tick :value="100000">100,000+</b-slider-tick>
    </b-slider>
    <h2>Deaths / Confirmed cases ratio (min.):</h2>
    <b-slider
      v-model="deathsRatio"
      :min="0"
      :max="10"
      :step="0.1"
      class="mb-6">
      <b-slider-tick :value="0">0%</b-slider-tick>
      <b-slider-tick :value="2">2%</b-slider-tick>
      <b-slider-tick :value="4">4%</b-slider-tick>
      <b-slider-tick :value="6">6%</b-slider-tick>
      <b-slider-tick :value="8">8%</b-slider-tick>
      <b-slider-tick :value="10">10%&nbsp;and&nbsp;+&nbsp;</b-slider-tick>
    </b-slider>
  </div>
  
</template>

<script>
export default {
  name: 'FilterByNumbers',
  computed: {
    totalDeathsFilter: {
      get() {
        return this.$store.getters.totalDeathsFilter
      },
      set(value) {
        this.$store.dispatch('set_totalDeathsFilter', value)
        this.$store.dispatch('set_currentPage', 0)
        this.$router.push({ query: { page: 1 } })
      }
    },
    deathsRatio: {
      get() {
        return this.$store.getters.deathsRatio
      },
      set(value) {
        this.$store.dispatch('set_deathsRatio', value)
        this.$store.dispatch('set_currentPage', 0)
        this.$router.push({ query: { page: 1 } })
      }
    }
  }
}
</script>
