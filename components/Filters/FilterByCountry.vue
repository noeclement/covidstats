<template>
  <div class="filterByCountry">
    <b-field
      label="Filter by Country">
      <div class="filterByCountry__inputContainer">
        <b-taginput
          v-model="selectedCountries"
          :data="countries"
          autocomplete
          field="Country"
          icon="label"
          placeholder="Select a country"
          @typing="autocompletion" />
        <b-button 
          class="ml-3" 
          @click="handleReset">Reset</b-button>
      </div>
      
    </b-field>
    
  </div>
</template>

<script>
export default {
  name: 'FilterByCountry',
  data() {
    return {
      inputValue: ''
    }
  },
  computed: {
    countries() {
      return this.$store.getters.countries.filter(
        e =>
          e.Country.toLowerCase().indexOf(this.inputValue.toLowerCase()) >= 0 ||
          e.CountryCode.toLowerCase().indexOf(this.inputValue.toLowerCase()) >=
            0
      )
    },
    selectedCountries: {
      get() {
        return this.$store.getters.selectedCountries
      },
      set(value) {
        this.$store.dispatch('set_selectedCountries', value)
        this.$store.dispatch('set_activeContinents', [
          'Africa',
          'Americas',
          'Asia',
          'Europe',
          'Oceania'
        ])
        this.$store.dispatch('set_currentPage', 0)
        this.$router.push({ query: { page: 1 } })
        this.inputValue = ''
      }
    }
  },
  methods: {
    autocompletion(value) {
      this.inputValue = value
    },
    handleReset() {
      this.$store.dispatch('set_selectedCountries', '')
    }
  }
}
</script>

<style lang="scss" scoped>
.filterByCountry__inputContainer {
  display: flex;
  flex-direction: row;
}
</style>
