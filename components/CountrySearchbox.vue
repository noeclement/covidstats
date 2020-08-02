<template>
  <div>
    <b-taginput
      v-model="selectedCountries"
      :data="countries"
      :open-on-focus="true"
      autocomplete
      field="Country"
      icon="label"
      placeholder="Filter by country"
      @typing="autocompletion" />
  </div>
</template>

<script>
export default {
  name: 'CountrySearchbox',
  data() {
    return {
      inputValue: '',
      selectedCountries: []
    }
  },
  computed: {
    countries: {
      get() {
        return this.$store.getters.countries.filter(
          e =>
            e.Country.toLowerCase().indexOf(this.inputValue.toLowerCase()) >=
              0 ||
            e.CountryCode.toLowerCase().indexOf(
              this.inputValue.toLowerCase()
            ) >= 0
        )
      }
    }
  },
  methods: {
    autocompletion(value) {
      this.inputValue = value
    }
  }
}
</script>
