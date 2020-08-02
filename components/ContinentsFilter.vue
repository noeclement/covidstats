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
      }
    }
  }
}
</script>
