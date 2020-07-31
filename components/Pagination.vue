<template>
  <div>
    <button 
      v-for="page in $store.getters.pagesCount"
      :key="page" 
      @click="$store.dispatch('set_currentPage', page - 1)">
      {{ page }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
</style>
