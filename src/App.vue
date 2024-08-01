<script setup>
  import Header from './components/Header.vue';
  import Filter from './components/Filter.vue';
  import Sort from './components/Sort.vue';
  import ProductDetail from './components/ProductDetail.vue';
</script>

<template>

  <Header />
  <div class="grid lg:flex gap-y-4 gap-x-48 lg:items-start mt-3 mx-auto justify-center">
  <Filter />
  <Sort />
</div>
  <ProductDetail />
</template>

<style scoped>
</style>

