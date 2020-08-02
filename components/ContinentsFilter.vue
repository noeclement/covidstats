<template>
  <div>
    <div class="block">
      <b-checkbox
        v-for="continent in continents"
        :key="continent"
        :native-value="continent"
        v-model="activeContinents">
        {{ continent }}
      </b-checkbox>
    </div>
  </div>
</template>

<script>
export default {
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
