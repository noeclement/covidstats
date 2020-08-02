<template>
  <div>
    <b-taginput
      v-model="selectedCountries"
      :data="countries"
      autocomplete
      field="Country"
      icon="label"
      placeholder="Filter by country"
      @typing="autocompletion" />
    <b-button @click="handleReset">Reset</b-button>
  </div>
</template>

<script>
export default {
  name: 'CountrySearchbox',
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
