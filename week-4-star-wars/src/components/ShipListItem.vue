<template>
  <div class="ship-card">
    <p><strong>Ship Name: </strong>{{ ship.name }}</p>
    <p><strong>Ship Model: </strong>{{ ship.model }}</p>
    <p><strong>Ship HyperDrive Rating: </strong>{{ ship.hyperdrive_rating }}</p>
    

  </div>
</template>

<script>
export default {
  props: {
    ship: Object,
  }
};
</script>

<style scoped>
.ship-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #efefef;
  width: 250px;
  height: 350px;
}
</style>