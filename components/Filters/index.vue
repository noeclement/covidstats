<template>
  <div>
    <div class="columns">
      <div class="column is-6">

        <FilterByCountry />
        <FilterByContinent />

        <Pagination />
      </div>
      <div class="column is-6">

        <FilterByNumbers />
      </div>
    </div>

    
  </div>
</template>

<script>
import FilterByContinent from '@/components/Filters/FilterByContinent'
import FilterByCountry from '@/components/Filters/FilterByCountry'
import FilterByNumbers from '@/components/Filters/FilterByNumbers'
import Pagination from '@/components/Pagination'

export default {
  name: 'Filters',
  components: {
    FilterByContinent,
    FilterByCountry,
    FilterByNumbers,
    Pagination
  }
}
</script>
