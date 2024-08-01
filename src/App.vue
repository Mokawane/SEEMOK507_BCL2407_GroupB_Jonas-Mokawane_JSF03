<script setup>
  import { ref } from 'vue'
  import Header from './components/Header.vue';
  import Filter from './components/Filter.vue';
  import Sort from './components/Sort.vue';
  import ProductDetail from './components/ProductDetail.vue';

  const sortOption = ref('default');

  const handleSortChange = (newSortOption) => {
    sortOption.value = newSortOption;
  };
</script>

<template>

  <Header />
  <div class="grid lg:flex gap-y-4 gap-x-48 lg:items-start mt-3 mx-auto justify-center">
  <Filter />
  <Sort @sortChange = "handleSortChange" />
</div>
  <ProductDetail :sortOption="sortOption" />
</template>

<style scoped>
</style>

