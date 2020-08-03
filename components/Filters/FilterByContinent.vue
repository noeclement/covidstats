<template>
  <div class="filterByContinent">
    <b-field
      label="Filter by Continent">
      <div class="filterByContinent__checkboxesContainer">
        <b-checkbox
          v-for="continent in defaultContinents"
          :key="continent"
          :native-value="continent"
          v-model="activeContinents"
          class="my-1"
        >
          {{ continent }}
        </b-checkbox>
      </div>
    </b-field>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FilterByContinent',
  computed: {
    ...mapGetters(['defaultContinents']),
    activeContinents: {
      get() {
        return this.$store.getters.activeContinents
      },
      set(value) {
        this.$store.dispatch('set_activeContinents', value)
        this.$store.dispatch('set_selectedCountries', '')
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
