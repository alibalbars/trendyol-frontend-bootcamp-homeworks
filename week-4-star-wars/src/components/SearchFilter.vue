<template>
  <div>
    <form class="filter-form" @submit.prevent="">
      <input
        v-model="query"
        type="text"
        @change="onQueryChange"
        placeholder="search for name or model"
      />
      <button @click="search" type="button">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchFilter",
  data() {
    return {
      query: "",
    };
  },

  methods: {
    onQueryChange(event) {
      this.search();
    },

    search() {
      this.$emit("queryChanged", this.query);
    },
  },
};
</script>

<style scoped>
.filter-form {
  display: flex;
  gap: 15px;
  justify-content: center;
}
</style>