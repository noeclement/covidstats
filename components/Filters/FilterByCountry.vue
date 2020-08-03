<template>
  <div class="filterByCountry">
    <b-field
      label="Filter by Country">
      <div class="filterByCountry__inputContainer">
        <b-taginput
          v-model="selectedCountries"
          :data="matchingCountries"
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
    // Returns countries for which the country name or country code contains the string typed by the user
    matchingCountries() {
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
        // Reset continent filter when selecting a country
        this.$store.dispatch(
          'set_activeContinents',
          this.$store.getters.defaultContinents
        )
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
