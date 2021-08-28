<template>
  <div class="ship-detail">
    <span><strong>Ship Name: </strong>{{ ship.name }}</span>
    <span><strong>Passengers: </strong>{{ ship.passengers }}</span>
    <span><strong>Max Atmosphering Speed: </strong>{{ ship.max_atmosphering_speed }}</span>
    <span><strong>Manufacturer: </strong>{{ ship.manufacturer }}</span>
    <span><strong>Crew: </strong>{{ ship.crew }}</span>
    <span><strong>Cargo Capacity: </strong>{{ ship.cargo_capacity }}</span>
    <GoBackButton></GoBackButton>
  </div>
</template>

<script>
import GoBackButton from '@/components/GoBackButton.vue';
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  components: {
      GoBackButton,
  },

  data() {
    return {
      ship: {},
    };
  },

  created() {
    const baseUrl = "https://swapi.dev/api/starships/?search=";
    fetch(baseUrl + this.formatAsShipName(this.name))
      .then((response) => response.json())
      .then((data) => (
          this.ship = this.filterByName(data.results)[0])
      );
  },

  methods: {
    formatAsShipName(str) {
      return str.split("_").join(" ").toString();
    },
    filterByName(resultsArray) {
      return resultsArray.filter(
        (ship) => ship.name.toLowerCase() === this.formatAsShipName(this.name)
      );
    },
  },
};
</script>

<style scoped>
  .ship-detail {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
  }
</style>
