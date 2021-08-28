<template>
  <div class="home">
    <SearchFilter @queryChanged="handleQuery" />
    <!-- <p v-text="query"></p> -->
    <ShipList :query="query" />
  </div>
</template>

<script>
import ShipList from "@/components/ShipList.vue";
import SearchFilter from "@/components/SearchFilter.vue";
export default {
  components: {
    ShipList,
    SearchFilter,
  },

  data() {
    return {
      query: "",
    };
  },

  methods: {
    handleQuery(query) {
      this.query = query;
    },
  },
};
</script>

<style scoped>
</style>
