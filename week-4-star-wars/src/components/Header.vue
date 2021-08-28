<template>
  <router-link :to="{name: 'Home', params: {}}">
    <header class="header">StarWars Ships</header>
  </router-link>
</template>

<script>
export default {};
</script>

<style scoped>
@font-face {
  font-family: 'star-wars';
  src: url('/~@/assets/fonts/starwars/Starjedi.ttf') format('font-type');
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: #efefef;
  margin-bottom: 20px;
  font-size: 36px;
  font-family: 'star-wars';
}

a {
  color: black;
  text-decoration: none;
}
</style>
