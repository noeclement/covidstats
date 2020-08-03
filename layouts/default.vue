<template>
  <div>
    <div class="layout">
      <b-menu class="layout__menu pl-5 pr-6 py-3">
        <div class="layout__menuHeader mb-3">
          <img 
            class="layout__logo"
            width="50"
            height="50"
            src="~assets/virus.png" 
            alt="Virus logo"
          >
          <h1 class="layout__title ml-3">CovidStats 2020</h1>
          
        </div>
        <p class="layout__description">
          Get the latest Covid statistics.<br>
          Updated multiple times a day.
        </p>
        <Filters class="layout__filters" />
      </b-menu>
      <nuxt class="layout__nuxtView px-5 py-3" />
    </div>
  </div>
</template>

<script>
import Filters from '@/components/Filters'

export default {
  name: 'Layout',
  components: { Filters }
}
</script>

<style lang="scss">
html {
  font-size: 0.85rem;
}

.layout {
  display: flex;
  &__menuHeader {
    display: flex;
    align-items: center;
  }
  &__logo {
    width: 50px;
    height: 50px;
  }
  &__title {
    font-size: 2rem;
    font-family: 'Catamaran';
  }
  &__description {
    font-size: 1.2rem;
  }
  &__menu {
    position: fixed;
    width: 26%;
    height: 100vh;
    box-shadow: 3px 0px 5px 0px rgba(0, 0, 0, 0.25);
  }
  &__nuxtView {
    width: 74%;
    margin-left: 26%;
  }
}
</style>
