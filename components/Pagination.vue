<template>
  <div>
    <button 
      v-for="page in $store.getters.pagesCount"
      :key="page" 
      @click="handlePageChange(page)">
      {{ page }}
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    handlePageChange(page) {
      this.$store.dispatch('set_currentPage', page - 1)
      this.$router.push({ query: { page } })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
