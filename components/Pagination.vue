<template>
  <div>
    <button 
      v-for="page in $store.getters.pagesCount"
      :key="page" 
      @click="$store.dispatch('set_currentPage', page - 1)">
      {{ page }}
    </button>
    {{ $store.getters.currentPage }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: 4
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
