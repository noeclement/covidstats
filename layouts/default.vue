<template>
  <div>
    <div class="layout">
      <b-menu class="layout__menu px-5 py-3">
        <Filters class="layout__filters" />
      </b-menu>
      <nuxt class="layout__nuxtView px-5 py-3" />
    </div>
  </div>
</template>

<script>
import Filters from '@/components/Filters'

export default {
  components: { Filters }
}
</script>

<style lang="scss">
html {
  font-size: 0.85rem;
}

.layout {
  display: flex;
  &__menu {
    width: 26%;
    box-shadow: 3px 0px 5px 0px rgba(0, 0, 0, 0.25);
  }
  &__filters {
    position: fixed;
  }
  &__nuxtView {
    width: 74%;
  }
}
</style>
