<script setup>
  import { ref, onMounted, computed } from 'vue'
  import { useRoute } from 'vue-router';
  import Header from './components/Header.vue';
  import Filter from './components/Filter.vue';
  import Sort from './components/Sort.vue';

  const sortOption = ref('default');
  const selectedCategory = ref('All Categories');
  const categories = ref([]);
  const searchQuery = ref('');

  const route = useRoute();

  const handleSortChange = (newSortOption) => {
    sortOption.value = newSortOption;
  };

  const handleCategoryChange = (newCategory) => {
  selectedCategory.value = newCategory;
};

const handleSearchChange = (newSearchQuery) => {
  searchQuery.value = newSearchQuery;
};

const getCategories = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      const uniqueCategories = [...new Set(data.map(product => product.category))];
      categories.value = ['All Categories', ...uniqueCategories];
    });
};

onMounted(() => {
  getCategories();
});

const isProductPage = computed(() => route.path.startsWith("/product/"));
</script>

<template>

  <Header />
  <div v-if="!isProductPage" class="grid lg:flex gap-y-4 gap-x-48 lg:items-start mt-3 mx-auto justify-center">
    <Filter :categories="categories" @categoryChange="handleCategoryChange" @searchChange="handleSearchChange" />
  <Sort @sortChange = "handleSortChange" />
</div>
  <router-view :sortOption="sortOption" :selectedCategory="selectedCategory" :searchQuery="searchQuery" />
</template>

<style scoped>
</style>

