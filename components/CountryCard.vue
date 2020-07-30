<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title has-text-grey">
        {{ name }}
      </p>
    </header>
    <div class="card-content">
      <div class="content has-text-centered">
        Test
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryCard',
  props: { name: { type: String, default: '' } },
  data() {
    return {}
  }
}
</script>

<style scoped>
.card {
  margin: 15px;
}
</style>
