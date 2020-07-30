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
      <div class="content has-text-centered">
        Total confirmed: {{ totalConfirmed }}<br>
        Total deaths: {{ totalDeaths }}<br>
        Total recovered: {{ totalRecovered }}<br><br>
        Last updated: {{ lastUpdated }}
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
    lastUpdated: { type: String, default: '' },
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
      `
    }
  }
}
</script>

<style scoped>
.card-content .content {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
}
</style>
