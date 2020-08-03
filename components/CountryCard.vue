<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title has-text-grey">
        {{ name }}
      </p>
    </header>
    <div 
      :style="cardStyle" 
      class="card-content" >
      <div class="content">
        <div class="content__container my-1">
          <b-icon 
            icon="circle" 
            type="is-warning"
            class="mr-2" />
          {{ totalConfirmed | usFormat }} confirmed
        </div>
        <div class="content__container my-1">
          <b-icon 
            icon="circle" 
            type="is-danger"
            class="mr-2" />
          {{ totalDeaths | usFormat }} dead
        </div>
        <div class="content__container my-1">
          <b-icon 
            icon="circle" 
            type="is-success"
            class="mr-2" />
          {{ totalRecovered | usFormat }} recovered
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryCard',
  props: {
    name: { type: String, default: '' },
    totalConfirmed: { type: Number, default: 0 },
    totalDeaths: { type: Number, default: 0 },
    totalRecovered: { type: Number, default: 0 },
    countryCode: { type: String, default: '' }
  },
  data() {
    return {}
  },
  computed: {
    cardStyle() {
      return `
        background-image: url('https://flagpedia.net/data/flags/w1160/${
          this.countryCode
        }.webp');
        background-size:cover;
        padding: 0;
      `
    }
  }
}
</script>

<style lang="scss" scoped>
.card-content {
  .content {
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 20px;
    &__container {
      display: flex;
      align-items: center;
    }
  }
  &__svg {
    width: 100px;
    height: 100;
    fill: red;
  }
}
</style>
