<template>
  <div class="filterByContinent">
    <b-field
      label="Filter by Continent">
      <div class="filterByContinent__checkboxesContainer">
        <b-checkbox
          v-for="continent in continents"
          :key="continent"
          :native-value="continent"
          v-model="activeContinents"
          class="my-1">
          {{ continent }}
        </b-checkbox>
      </div>
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'FilterByContinent',
  data() {
    return {
      continents: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    }
  },
  computed: {
    activeContinents: {
      get() {
        return this.$store.getters.activeContinents
      },
      set(value) {
        this.$store.dispatch('set_activeContinents', value)
        this.$store.dispatch('set_selectedCountries', '')
        this.$store.dispatch('set_currentPage', 0)
        this.$router.push({ query: { page: 1 } })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.filterByContinent__checkboxesContainer {
  display: flex;
  flex-direction: column;
}
</style>
