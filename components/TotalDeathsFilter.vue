<template>
  <div>
    <h2>Total Deaths (min.):</h2>
    <b-slider
      v-model="totalDeathsFilter"
      :min="0"
      :max="50000"
      :step="100"
      class="mb-6">
      <b-slider-tick :value="0">0</b-slider-tick>
      <b-slider-tick :value="10000">10,000</b-slider-tick>
      <b-slider-tick :value="20000">20,000</b-slider-tick>
      <b-slider-tick :value="30000">30,000</b-slider-tick>
      <b-slider-tick :value="40000">40,000</b-slider-tick>
      <b-slider-tick :value="50000">50,000+</b-slider-tick>
    </b-slider>
  </div>
  
</template>

<script>
export default {
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
    }
  }
}
</script>
