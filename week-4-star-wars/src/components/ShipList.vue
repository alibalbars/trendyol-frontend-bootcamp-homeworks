<template>
  <div class="card-list-container">

    <div v-if="isLoading" class="loading">Yükleniyor...</div>
    <ul v-else class="card-list">
      <li v-for="ship in ships" :key="ship.name">
        <router-link
          :to="{ name: 'Ship', params: { name: formatAsLink(ship.name) } }"
          class="link"
        >
          <ShipListItem :ship="ship"></ShipListItem>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import ShipListItem from "@/components/ShipListItem.vue";

const baseUrl = "https://swapi.dev/api/starships/?search=";
export default {
  props: {
    query: String,
  },
  components: {
    ShipListItem,
  },
  data() {
    return {
      ships: [],
      isLoading: true,
    };
  },

  created() {
    this.getShips(baseUrl);
  },

  // Handle props changes
  watch: {
    $props: {
      handler() {
        this.getShips(baseUrl + this.query);
      },
      deep: true,
      immediate: true,
    },
  },

  methods: {
    formatAsLink(str) {
      return str.toLowerCase().split(" ").join("_").toString();
    },

    getShips(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.ships = data.results;
          console.log(this.ships);
          this.isLoading = false;
        });
    },

    abc: function (value) {
      alert(value)
    },
  },
};
</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  list-style-type: none;
  padding: 0 10%;
}

.link {
  text-decoration: none;
  color: black;
}

.loading {
  margin-top: 20px;
}
</style>